import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  Loggedin: false
}
const getters = {
  isLoggedin (state) {
    return state.Loggedin
  }
}
const mutations = {
  tologin (state) {
    state.Loggedin = true
  },
  tologout (state) {
    state.Loggedin = false
  }
}
const actions = {
  logIn (contex) {
    contex.commit('tologin')
  },
  logOut (contex) {
    contex.commit('tologout')
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
