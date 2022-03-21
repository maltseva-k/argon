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
        console.log('uid: ' + uid)
        await firebase.database().ref(`/users/${uid}/info`).set({
          name: name
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async loginUserWithGoogle ({ dispatch }) {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase
          .auth()
          .signInWithPopup(provider)
      } catch (e) {
        console.log(e)
        /* commit('setError', e) */
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
