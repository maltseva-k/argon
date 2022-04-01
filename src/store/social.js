import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async fetchSocials ({
      commit,
      dispatch
    }) {
      try {
        /* const uid = await dispatch('getUid')
        console.log('uid: ' + uid) */
        const socials = []
        const snapshot = await firebase
          .database()
          .ref('/social')
          .get()
        const someProjects = snapshot.val() || {}
        Object.keys(someProjects).forEach(key => {
          socials.push({
            title: someProjects[key].title,
            visitors: someProjects[key].visitors,
            percent: someProjects[key].percent,
            id: key
          })
        })
        return socials
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
