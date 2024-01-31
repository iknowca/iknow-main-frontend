<template>
  <v-app app>
    <AppBar></AppBar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import AppBar from './components/appbar/AppBar.vue'

import AOS from 'aos';

AOS.init();


</script>
