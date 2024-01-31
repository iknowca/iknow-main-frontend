<template>
  <v-app app>
    <AppBar></AppBar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <FooterBar></FooterBar>
  </v-app>
</template>

<script setup>
import AppBar from './components/appbar/AppBar.vue'
import FooterBar from './components/footer/FooterBar.vue'
import AOS from 'aos';

AOS.init();


</script>
