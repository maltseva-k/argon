import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    },
    clearInfo (state) {
      state.info = {}
    }
  },
  actions: {
    async fetchUserInfo ({
      dispatch,
      commit
    }) {
      try {
        const uid = await dispatch('getUid')
        const snapshot = await firebase
          .database()
          .ref(`/users/${uid}/info/`)
          .once('value')
        const information = snapshot.val()
        const userInfo = {
          name: information.name || '',
          email: information.email || '',
          userFunction: information.userFunction || '',
          uid
        }
        return userInfo
      } catch (e) {

      }
    },
    async updateUserInfo ({
      commit,
      dispatch
    }, {
      name,
      email,
      userFunction
    }) {
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).update({
          name,
          email,
          userFunction,
          uid
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchAllUsers ({
      commit,
      dispatch
    }) {
      try {
        const allUsers = []
        const snapshot = await firebase
          .database()
          .ref('/users')
          .once('value')
        const users = snapshot.val() || {}
        Object.keys(users).forEach(key => {
          const oneOf = users[key].info
          allUsers.push(oneOf)
        })
        return allUsers
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
