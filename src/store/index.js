import { createStore } from 'vuex'
import auth from './auth'
import projects from './projects'
import user from './user'
import social from './social'
import orders from './orders'
import visitors from './visitors'
import statistic from './statistic'
import sales from './sales'

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
    user,
    social,
    orders,
    visitors,
    statistic,
    sales
  }
})
