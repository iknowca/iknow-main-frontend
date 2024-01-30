<template>
  <v-app app>
    <v-main>
      <AppBar></AppBar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './components/appbar/AppBar.vue'


</script>
