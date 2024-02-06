<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8">
                <v-card class="pa-6 mt-8">
                    <v-card-title class="text-center">
                        <h1>Login</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field :disabled="emailValidation" v-model="email" label="email" required
                                variant="outlined"></v-text-field>
                            <v-text-field v-if="emailValidation" type="password" v-model="password" label="password"
                                required variant="outlined"></v-text-field>
                            <div class="text-center">
                                <!-- <router-link to="/find-password">혹시 비밀번호를 잊어버리셨나요?</router-link> -->
                            </div>
                            <v-btn v-if="!emailValidation" @click="emailValdationRequest" color="primary">Login</v-btn>
                            <v-btn v-if="emailValidation" @click="login" color="primary">Login</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-card-text class="text-right">
                        아직 회원가입을 안하셨나요? <v-btn variant="plain" @click="join">Join</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import authServerAxios from '@/util/axiosInstances/authServer';
import { ref } from 'vue';

const router = useRouter();
const store = useStore();
const email = ref('');
const password = ref('');

const emailValidation = ref(false);

const emailValdationRequest = () => {
    authServerAxios.post('/account/validate-email', { email: email.value })
        .then((result) => {
            if (result.data === true) {
                emailValidation.value = true;
            } else {
                alert('이메일이 존재하지 않습니다.\n회원가입을 먼저 진행해주세요.');
            }
        });
};

const login = () => {
    store.dispatch('getToken', { email: email.value, password: password.value })
        .then(() => {
            if (store.state.accountInfo.nickname === 'AnonymousUser') {
                alert("회원가입 이후 처음 로그인하셨습니다.\n 마이페이지에서 정보를 입력해주세요.")
                store.commit('setNickname', "AnonymousUser")
                router.push('/account/mypage');
            }
            else {
                router.push('/');
            }
        }).catch(() => {
            alert('비밀번호가 일치하지 않습니다.\n비밀번호를 다시 확인해주세요.');
        });
};

const join = () => {
    router.push('/join');
};
</script>
