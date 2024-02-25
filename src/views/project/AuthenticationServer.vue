<template lang="">
    <div>
        <h1>프로젝트를 소개합니다!</h1>
        <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>
    <div>
        <h1>Authentication Server <v-btn icon flat><v-icon>mdi-github</v-icon></v-btn></h1>
        <p>지금 보고 계시는 웹 애플리케이션의 주요 백엔드를 맡고 있는 서버입니다!</p>
        <p>현재 이 서버는 겨우 회원 관리, 게시글 작성, 댓글 작성등의 기본적인 기능만을 담당하고 있지만, <br>향후 제 프로젝트의 모든 회원을 통합적으로 관리하는 통합 회원 서버로 사용할 예정입니다</p>
        <p>현재 사용되고 있는 기술은 다음과 같습니다.</p>
        <br>
        <ul>
            <li>Java 21</li>
            <li>SpringBoot 3.2.2</li>
            <li>Spring Data JPA</li> - 데이터 베이스를 객체지향적으로 통합하기 위해 사용합니다.
            <li>Spring Security</li> - 회원 인증 및 인가를 위해 사용합니다.
            <li>Mysql</li> - 회원 정보 등의 데이터를 저장합니다.
            <li>JWT</li> - access token, refresh token을 사용한 회원 인증을 위해 사용합니다.
            <li>Redis</li> - access token, refresh token을 저장하기 위해 사용합니다.
            <li>Github Actions</li> - CI/CD를 위해 사용합니다.
            <li>Nginx</li> - API Gateway로 사용합니다.
        </ul>
    </div>
    </div>
</template>
<script setup>
let items = [
    {
        title: 'AUTHENTICATION SERVER',
        disabled: true,
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
</script>
<style lang="">
    
</style>