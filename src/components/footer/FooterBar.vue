<template lang="">
    <div>
        <v-footer>
    <v-row justify="center" no-gutters>
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

</script>
<style scope>
a {
  color: inherit;
  text-decoration: none;
}
</style>