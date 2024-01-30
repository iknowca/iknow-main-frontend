<template lang="">
    <v-app-bar app color="#FFCC21">
    
      <v-img @click="router.push('/')" class="mx-2" src="https://see.fontimg.com/api/renderfont4/4B116/eyJyIjoiZnMiLCJoIjoxMDEsInciOjEwMDAsImZzIjoxMDEsImZnYyI6IiMwRTBFMEUiLCJiZ2MiOiIjQjRBRjREIiwidCI6MX0/SUtOT1c/aeroworld-personal-used.png"></v-img>
      <v-spacer></v-spacer>

      <v-btn variant="plain" >
        ABOUT ME
      </v-btn>
      <v-btn variant="plain" @click="router.push('/login')">
        login
      </v-btn>
      <v-btn variant="plain">
        projects
      </v-btn>
      <v-btn variant="plain">
        contact
      </v-btn>
    </v-app-bar>
</template>
<script setup>
import router from "@/router";
</script>
<style lang="">
    
</style>