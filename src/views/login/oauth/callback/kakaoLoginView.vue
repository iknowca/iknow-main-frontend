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

const route = useRoute();
const router = useRouter();
const code = route.query.code


onMounted(() => {
    authServer.get(`/account/oauth/callback/kakao`, {params: {code: code}, withCredentials: true})
    .then((res) => {
        authServer.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`
        router.push("/")
    })
})

</script>
<style lang="">
    
</style>