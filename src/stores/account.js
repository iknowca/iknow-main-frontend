import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useAccountStore = defineStore('account', {
    state: ()=> ( {
        accountInfo: reactive({
            id: "",
            nickname: "",
        }),
        loginStatus: ref(false),
    }),
    actions: {
        updateLogin() {
            this.loginStatus = localStorage.getItem('loginStatus') === 'true';
            console.log('loginStatus', this.loginStatus);
        },
        setLoginStatus(status) {
            this.loginStatus = status;
            localStorage.setItem('loginStatus', status);
        },
        setNickname(nickname) {
            if (nickname === null || nickname === undefined) {
                this.accountInfo.nickname = "anonymous"+this.accountInfo.id;
                return;
            }
            this.accountInfo.nickname = nickname;
        },
        setAccountId(id) {
            this.accountInfo.id = id;
        }
    }
});