import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async fetchSales ({
      commit,
      dispatch
    }, year) {
      try {
        const yearFind = year
        const yearsSales = []
        const snapshot = await firebase
          .database()
          .ref(`/${yearFind}`)
          .get()
        const sales = snapshot.val() || {}
        Object.keys(sales).forEach(key => {
          yearsSales.push({
            month: sales[key].month,
            sales: sales[key].sales
          })
        })
        return yearsSales
      } catch (e) {
        console.log(e)
        /* commit('setError', e) */
        throw e
      }
    }
  }
}
