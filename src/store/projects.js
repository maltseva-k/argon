import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default {
  actions: {
    async createProject ({
      commit,
      dispatch
    }, {
      title,
      budget,
      status,
      completion
    }) {
      try {
        const uid = await dispatch('getUid')
        const project = await firebase.database().ref('/projects').push({
          title,
          budget,
          status,
          completion,
          uid
        }) || {}
        return {
          title,
          budget,
          status,
          completion,
          uid,
          id: project.key
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
        /* const uid = await dispatch('getUid')
        console.log('uid: ' + uid) */
        const projects = []
        const snapshot = await firebase
          .database()
          .ref('/projects')
          .get()
        const someProjects = snapshot.val() || {}
        Object.keys(someProjects).forEach(key => {
          projects.push({
            title: someProjects[key].title,
            budget: someProjects[key].budget,
            status: someProjects[key].status,
            completion: someProjects[key].completion,
            uid: someProjects[key].uid,
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
    async fetchThisUsersProjects ({
      commit,
      dispatch
    }) {
      try {
        const uid = await dispatch('getUid')
        const projects = []
        const snapshot = await firebase
          .database()
          .ref('/projects')
          .orderByChild('uid')
          .equalTo(uid)
          .get()
        const someProjects = snapshot.val() || {}
        Object.keys(someProjects).forEach(key => {
          projects.push({
            title: someProjects[key].title,
            budget: someProjects[key].budget,
            status: someProjects[key].status,
            completion: someProjects[key].completion,
            uid: someProjects[key].uid,
            id: key
          })
        })
        return projects
      } catch (e) {
        console.log(e)
        /* commit('setError', e) */
        throw e
      }
    },
    async deleteProject ({ commit, dispatch }, id) {
      try {
        const uid = await dispatch('getUid')
        console.log(uid)

        await firebase.database().ref(`/projects/${id}`).remove()
        console.log('удалено!')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async UpdateCategory (
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
