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

      <v-menu>
        <template v-slot:activator="{props}">
          <v-btn v-if="isLogin" v-bind="props">
        {{nickname}} 님 환영합니다
      </v-btn>
        </template>

        <v-list> 
          <v-list-item>
            <v-btn variant="plain" @click="router.push('/account/mypage')">
              mypage
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="plain" @click="logout">
              logout
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn v-if="!isLogin" variant="plain" @click="router.push('/login')">
        login
      </v-btn>
      
    </v-app-bar>
</template>

<script setup>
import router from "@/router";
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const isLogin = computed(() => store.state.accessToken === '' ? false : true);

const logout = () => {
  store.dispatch('logout');
  router.push('/');
};

const nickname = computed(() => store.state.accountInfo.nickname);
</script>