import router from '@/router'
import authServerAxios from '@/util/axiosInstances/authServer'
import { createStore } from 'vuex'

export default createStore({
  state: {
    accessToken: '',
    refreshToken: '',
    userInfo: {
      email: '',
      nickname: '',
    },
  },
  getters: {
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
    },
    setUserEmail(state, email) {
      state.userInfo.email = email
    },
    setUserId(state, userId) {
      state.userInfo.userId = userId
    },
    setUserNickname(state, nickname) {
      state.userInfo.nickname = nickname
    }
  },
  actions: {
    async getToken({ commit }, { email, password }) {
      try {
        const response = await authServerAxios.post('/account/login', { email, password })
        const accessToken = response.data.accessToken
        const refreshToken = response.data.refreshToken
        commit('setAccessToken', accessToken)
        commit('setRefreshToken', refreshToken)

        var token = accessToken.split(' ')[1]
        var base64Url = token.split('.')[1]
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))

        var userInfoMap = JSON.parse(jsonPayload)

        commit('setUserEmail', userInfoMap.email)
        commit('setUserId', userInfoMap.accountId)
        if (userInfoMap.nickname === "") {
          commit('setUserNickname', 'AnonymousUser')
          router.push('/account/update-info')
        } else {
          commit('setUserNickname', userInfoMap.nickname)
        }


        return response
      } catch (error) {
        return error.response
      }
    },
    async logout({ commit }) {
      try {
        // const response = await authServerAxios.post('/account/logout')
        commit('setAccessToken', '')
        commit('setRefreshToken', '')
        // return response
      } catch (error) {
        return error.response
      }
    }
  },
  modules: {
  }
})
