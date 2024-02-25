<template lang="">
    <div>
        <v-card class="w-50 ma-auto pa-4">
            <h1 class="text-center">My Page                                    
                <v-avatar>
                    <v-img v-if='accountInfo.platform==="kakao"' :src="require('../../assets/KakaoTalk_logo.svg')"></v-img>
                    <v-img v-if='accountInfo.platform==="google"' :src="require('../../assets/Google__G__logo.png')"></v-img>
                </v-avatar>
            </h1>
            <v-card-text>
                <v-form>
                    <v-text-field v-if='accountInfo.accountType==="LocalAccount"' variant="outlined" label="Email" readonly :model-value="accountInfo.email"></v-text-field>
                    <v-text-field label="nickname" clearable v-model="modifiedAccountInfo.nickname"></v-text-field>
                    <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                    <v-text-field label="Password Validation" type="password" v-model="passwordValidation"></v-text-field>
                    

                    <v-btn @click="updateAccountInfo" color="primary">Update</v-btn>
                </v-form>
            </v-card-text>

        </v-card>
    </div>
</template>
<script setup>
import authServerAxios from '@/util/axiosInstances/authServer';
import { onMounted } from 'vue';
import { reactive } from 'vue';

const accountInfo = reactive({
    email: '',
    nickname: '',
    password: '',
    passwordValidation: '',
    accountType: '',
    platform: ''
})

// eslint-disable-next-line no-unused-vars
const modifiedAccountInfo = reactive({
    nickname: '',
    password: '',
})


const getAccountInfo = () => {
    authServerAxios.get('/account')
        .then((result) => {
            accountInfo.email = result.data.email;
            accountInfo.nickname = result.data.nickname;
            accountInfo.accountType = result.data.accountType;
            accountInfo.platform = result.data.platform;

            modifiedAccountInfo.nickname = result.data.nickname;
            modifiedAccountInfo.password = result.data.password;
        })
        .catch((error) => {
            console.log(error);
        })
}

const updateAccountInfo = ()=> {
    if (accountInfo.password !== accountInfo.passwordValidation) {
        alert('password is not same');
        return;
    }

    authServerAxios.patch('/account', {
        nickname: modifiedAccountInfo.nickname,
        password: modifiedAccountInfo.password
    })
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
            alert('update success');
        })
        .catch((error) => {
            console.log(error);
        })
}

onMounted(() => {
    getAccountInfo();
})

</script>
<style lang="">
    
</style>