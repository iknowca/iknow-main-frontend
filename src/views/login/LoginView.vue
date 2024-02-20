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
                            <p class="text-center">sns 계정을 사용해 로그인 해보세요</p>
                            <div class="">
                                <v-row class="pa-4 d-flex justify-center">
                                <v-btn @click="getOauthtUrl('kakao')" icon variant="plain">
                                    <v-avatar>
                                        <v-img :src="require('../../assets/KakaoTalk_logo.svg')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <v-btn @click="googleError" icon variant="plain">
                                    <v-avatar>
                                        <v-img :src="require('../../assets/Google__G__logo.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                            </v-row>
                            </div>
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
import authServerAxios from '@/util/axiosInstances/authServer';
import { ref } from 'vue';
import { useAccountStore } from '@/stores/account';

const router = useRouter();
const email = ref('');
const password = ref('');
const accountStore = useAccountStore()

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
    authServerAxios.post("/account/login", { email: email.value, password: password.value }, { withCredentials: true })
        .then((res) => {
            if (res.status === 200) {
                authServerAxios.defaults.headers.common['Authorization'] = `${res.data.accessToken}`;
                accountStore.setLoginStatus(true);
                router.push("/");
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                alert('로그인에 실패하였습니다.\n이메일과 비밀번호를 확인해주세요.');
            } else {
                alert('로그인에 실패하였습니다.\n잠시 후 다시 시도해주세요.');
            }
        });
};

const getOauthtUrl = (platform) => {
    authServerAxios.get(`/account/oauth/url/${platform}`)
        .then((res) => {
            console.log(res.data.url);
            window.location.href = res.data.url;
        })
        .catch(() => {
            alert('로그인에 실패하였습니다.\n잠시 후 다시 시도해주세요.');
        });
}

const googleError = () => {
    alert('현재는 kakao만 지원중입니다');
}
const join = () => {
    router.push('/join');
};
</script>
