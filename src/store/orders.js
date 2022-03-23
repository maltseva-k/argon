import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async fetchOrders ({
      commit,
      dispatch
    }) {
      try {
        const socials = []
        const snapshot = await firebase
          .database()
          .ref('/orders')
          .get()
        const someProjects = snapshot.val() || {}
        Object.keys(someProjects).forEach(key => {
          socials.push({
            month: someProjects[key].month,
            sales: someProjects[key].sales
          })
        })
        console.log(socials)
        return socials
      } catch (e) {
        console.log(e)
        /* commit('setError', e) */
        throw e
      }
    }
  }
}
