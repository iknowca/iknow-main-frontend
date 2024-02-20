<template lang="">
    <div>
        카카오 로그인 중입니다.
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import authServer from '@/util/axiosInstances/authServer';
import { useRouter } from 'vue-router';
import { useAccountStore } from '@/stores/account';

const route = useRoute();
const router = useRouter();
const code = route.query.code
const accountStore = useAccountStore();


onMounted(() => {
    authServer.get(`/account/oauth/callback/kakao`, {params: {code: code}, withCredentials: true})
    .then((res) => {
        authServer.defaults.headers.common['Authorization'] = `${res.data.accessToken}`
        accountStore.setLoginStatus(true);
        router.push("/")
    })
})

</script>
<style lang="">
    
</style>