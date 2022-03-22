import { createStore } from 'vuex'
import auth from './auth'
import projects from './projects'
import user from './user'

export default createStore({
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth,
    projects,
    user
  }
})
