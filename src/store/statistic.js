import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async fetchStatistic ({
      commit,
      dispatch
    }) {
      try {
        const statistic = []
        /* const img = await firebase.storage.refFromURL('gs://argon-admin-panel.appspot.com/DashboardCardsIcons/ClientCard/ClientCard.svg') */
        const snapshot = await firebase
          .database()
          .ref('/statistic')
          .get()
        const someInfo = snapshot.val() || {}
        Object.keys(someInfo).forEach(key => {
          statistic.push({
            title: someInfo[key].title,
            indicator: someInfo[key].indicator,
            increment: someInfo[key].increment,
            card: key
          })
        })

        return statistic
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
