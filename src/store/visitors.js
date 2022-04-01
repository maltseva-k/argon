import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async fetchVisitors ({
      commit,
      dispatch
    }) {
      try {
        const visitors = []
        const snapshot = await firebase
          .database()
          .ref('/pagevisitors')
          .get()
        const someVisitors = snapshot.val() || {}
        Object.keys(someVisitors).forEach(key => {
          visitors.push({
            page: someVisitors[key].page,
            visitors: someVisitors[key].visitors,
            uniquevisitors: someVisitors[key].uniquevisitors
          })
        })
        return visitors
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
