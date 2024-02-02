<template lang="">
    <div>
        <h1>프로젝트를 소개합니다!</h1>
        <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>
    </div>
</template>
<script setup>
import router from '@/router';
import { onMounted } from 'vue';

let items = [
    {
        title: 'AUTHENTICATION SERVER',
        disabled: false,
        href: '/project/authentication-server',
    },
    {
        title: 'GET MOIM',
        disabled: false,
        href: '/project/get-moim',
    },
    {
        title: "I'M FINE, APPLE!",
        disabled: false,
        href: '/project/im-fine-apple',
    },
]
onMounted(() => {
    router.push('/project/authentication-server')
})
</script>
<style lang="">
    
</style>