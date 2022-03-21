import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async createCategory ({
      commit,
      dispatch
    }, {
      title,
      limit
    }) {
      try {
        const uid = await dispatch('getUid')
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({
          title,
          limit
        }) || {}
        return {
          title,
          limit,
          id: category.key
        }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchProjects ({
      commit,
      dispatch
    }) {
      try {
        const uid = await dispatch('getUid')
        console.log('uid: ' + uid)
        const projects = []
        const snapshot = await firebase
          .database()
          .ref(`/users/${uid}/projects`)
          .get()
        const someProjects = snapshot.val() || {}
        Object.keys(someProjects).forEach(key => {
          console.log(key)
          projects.push({
            title: someProjects[key].title,
            budget: someProjects[key].budget,
            status: someProjects[key].status,
            completion: someProjects[key].completion,
            id: key
          })
        })
        console.log(projects)
        return projects
      } catch (e) {
        console.log(e)
        /* commit('setError', e) */
        throw e
      }
    },
    async deleteCategory ({ commit, dispatch }, id) {
      try {
        const uid = await dispatch('getUid')

        await firebase.database().ref(`/users/${uid}/categories/${id}`).remove()
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async updateCategory (
      {
        commit, dispatch
      },
      {
        title,
        limit,
        id
      }) {
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/categories`).child(id).update({ title, limit })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchCategoryById ({
      commit,
      dispatch
    }, id) {
      try {
        const uid = await dispatch('getUid')
        let someCategory = (await firebase.database().ref(`/users/${uid}/categories`).child(id).once('value', snapshot => {
          someCategory = snapshot.val() || {}
        })).val()
        return { ...someCategory, id }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
