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
        return projects
      } catch (e) {
        commit('setError', e)
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
        commit('setError', e)
        throw e
      }
    },
    async deleteProject ({ commit, dispatch }, id) {
      try {
        // const uid = await dispatch('getUid')

        await firebase.database().ref(`/projects/${id}`).remove()
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
