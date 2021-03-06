import firebase from 'firebase/compat/app'

export default {
  actions: {
    async registerUser ({ dispatch, commit }, {
      name,
      email,
      password
    }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          name: name
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async loginUserWithGoogle ({ commit, dispatch }) {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase
          .auth()
          .signInWithPopup(provider)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async loginUser ({
      dispatch,
      commit
    }, {
      email,
      password
    }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async logout ({ commit }) {
      await firebase.auth().signOut()
      commit('clearInfo')
    },
    getUid () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    }
  }
}
