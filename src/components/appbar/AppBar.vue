<template lang="">
    <v-app-bar app color="white" flat>
    
      <v-img @click="router.push('/')" class="mx-2" src="https://see.fontimg.com/api/renderfont4/4B116/eyJyIjoiZnMiLCJoIjoxMDEsInciOjEwMDAsImZzIjoxMDEsImZnYyI6IiMwRTBFMEUiLCJiZ2MiOiIjQjRBRjREIiwidCI6MX0/SUtOT1c/aeroworld-personal-used.png"></v-img>
      <v-spacer></v-spacer>

      <v-btn variant="plain" @click="router.push('/about-me')" >
        ABOUT ME
      </v-btn>
      <v-btn variant="plain" @click="router.push('/projects')">
        projects
      </v-btn>
      <v-btn variant="plain" @click="router.push('/contact')">
        contact
      </v-btn>
      <v-btn v-if="!isLogin" variant="plain" @click="router.push('/login')">
        login
      </v-btn>
      <v-btn v-if="isLogin" variant="plain" @click="logout">
        logout
      </v-btn>
    </v-app-bar>
</template>

<script setup>
import router from "@/router";
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

const isLogin = computed(() => store.state.accessToken===''?false:true);
// const userInfo = computed(() => store.state.userInfo);

const logout = () => {
    store.dispatch('logout');
    router.push('/');
};
</script>