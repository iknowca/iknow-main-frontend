<template lang="">
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8">
                <v-card class="pa-6 mt-8">
                    <v-card-title class="text-center">
                        <h1>Join</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit="join">
                            <v-text-field :disabled="emailValidation" v-model="email" label="email" required variant="outlined" ></v-text-field>
                            <v-btn v-if="!emailValidation" color="primary" @click="validateEmail">Email 중복 확인</v-btn>
                            <v-text-field type="password" v-if="emailValidation" v-model="password" label="password" required variant="outlined"></v-text-field>
                            <v-text-field type="password" v-if="emailValidation" v-model="passwordValidation" label="validate password" required variant="outlined"></v-text-field>
                            <div class="text-center">
                            </div>
                            <v-btn v-if="emailValidation" type="submit" color="primary">join</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import {ref} from 'vue'
import authServerAxios from '@/util/axiosInstances/authServer'
import { useRouter } from 'vue-router';

const router = useRouter()
const email = ref('')
const emailValidation = ref(false)
const password = ref('')
const passwordValidation = ref('') 

const validateEmail = () => {
    event.preventDefault();
    authServerAxios.post('/account/validate-email', {email: email.value})
    .then((result)=> {
        if(result.data === true) {
            alert('해당 이메일로 가입한 계정이 이미 존재합니다.')
        } else {
            emailValidation.value = true
        }
    }) 
}

const join=()=> {
    event.preventDefault();
    if(password.value !== passwordValidation.value) {
        alert('비밀번호가 일치하지 않습니다.')
        return
    }
    authServerAxios.post('/account/join', {email: email.value, password: password.value})
    .then((result)=> {
        console.log(result.data)
        if(result.data.status === "success") {
            alert('회원가입이 완료되었습니다.')
            router.push('/')
        } else {
            alert('회원가입에 실패하였습니다.\n이메일과 비밀번호를 확인해주세요.')
        }
    })
    .catch((err)=> {
        if (err.response.status === 400 && err.response.data.message  === "이메일 형식이 올바르지 않습니다.") {
            alert('이메일 형식이 올바르지 않습니다.\n이메일을 다시 확인해주세요.')
            emailValidation.value = false
            email.value = ''
            password.value = ''
        }
    })
}
</script>
<style lang="">
    
</style>