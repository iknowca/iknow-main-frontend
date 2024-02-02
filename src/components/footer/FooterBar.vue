<template lang="">
    <div>
        <v-footer>
   
    <v-row justify="center" no-gutters>
      <v-container></v-container>
      <v-col cols="12">
        <div class="footerBanner ma-0 text-center d-flex align-center justify-center">
          <div>
          <h1>절찬리 취업중</h1>
          <h2  @click="router.push('/contact')">연락하러 가기<v-icon>mdi-arrow-right-bold-circle-outline</v-icon></h2>
        </div>
        </div>
      </v-col>
      <v-container></v-container>
      <v-col class="text-center" cols="12">
      이 페이지의 소스코드가 궁금하시다면
      </v-col>
      <div>
        <a href="https://github.com/iknowca/iknow-main-frontend">
      <v-btn flat>
        FRONTEND
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </a>
      <a href="https://github.com/iknowca/iknow-authentication-server">
      <v-btn flat>
        BACKEND
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </a>
      </div>
    
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>IKNOW</strong>
      </v-col>
    </v-row>
  </v-footer>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>
<style scope>
a {
  color: inherit;
  text-decoration: none;
}

div.footerBanner {
  background-color: aliceblue;
  height: 150px;
  width: 100%;
  display: block;
}
</style>