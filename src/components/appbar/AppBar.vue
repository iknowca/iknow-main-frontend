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
          <v-btn v-if="loginStatus" v-bind="props">
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
      <v-btn v-if="!loginStatus" variant="plain" @click="router.push('/login')">
        login
      </v-btn>
      
    </v-app-bar>
</template>

<script setup>
import router from "@/router";
import { useAccountStore } from '@/stores/account';
import authServerAxios from "@/util/axiosInstances/authServer";
import { onMounted } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';

const accountStore = useAccountStore();
const loginStatus = computed(() => accountStore.loginStatus);
const nickname = computed(() => accountStore.accountInfo.nickname);

onMounted(() => {
  accountStore.updateLogin();
})

watch(loginStatus, (newVal) => {
  if (newVal) {
    authServerAxios.get('/account')
      .then((result) => {
        accountStore.setAccountId(result.data.id);
        accountStore.setNickname(result.data.nickname);
      })
      .catch((error) => {
        console.log(error);
      })
  }
})

const logout = () => {
  authServerAxios.delete('/account/logout')
  delete authServerAxios.defaults.headers.common['Authorization'];
  accountStore.setLoginStatus(false);

  router.push('/');
};

</script>