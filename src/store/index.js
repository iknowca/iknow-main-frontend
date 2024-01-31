import authServerAxios from '@/util/axiosInstances/authServer'
import { createStore } from 'vuex'

export default createStore({
  state: {
    accessToken: '',
    refreshToken: '',
    userInfo: {},
  },
  getters: {
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
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
