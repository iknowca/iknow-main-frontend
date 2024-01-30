<template>
  <v-app app>
    <v-layout>
      <AppBar></AppBar>
      <v-main>
        <router-view/>
      </v-main>
    </v-layout>

  </v-app>
</template>

<script setup>
import AppBar from './components/appbar/AppBar.vue'


</script>
