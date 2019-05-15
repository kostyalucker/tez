import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      userData: null,
      userRepos: [],
      isAuth: false
    },
    mutations: {
      SET_USER_DATA(state, data) {
        state.userData = data
      },
      SET_USER_REPOS(state, data) {
        state.userRepos = data
      },
      SET_AUTH(state, isAuth) {
        state.isAuth = isAuth
      }
    },
    actions: {
      setUserDataAction({ commit }, data) {
        commit('SET_USER_DATA', data)
      },
      setUserReposAction({ commit }, data) {
        commit('SET_USER_REPOS', data)
      },
      setAuth({ commit }, isAuth) {
        commit('SET_AUTH', isAuth)
      }
    }
  })

export default store
