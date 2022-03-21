import { createApp } from 'vue'
/* import Vue from 'vue' */
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import 'flowbite'

/* import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth' */
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDA04rN5cjeCMIqYS48fVYZn1CefxIub9I',
  authDomain: 'argon-admin-panel.firebaseapp.com',
  projectId: 'argon-admin-panel',
  storageBucket: 'argon-admin-panel.appspot.com',
  messagingSenderId: '180076498459',
  appId: '1:180076498459:web:84629189296b4654fa32be',
  measurementId: 'G-8MT1PK0RGB'
}
firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')

/* const auth = getAuth(FirebaseApp) */

/* onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('logged in!')
  } else {
    console.log('no user!')
  }
}) */

/* const auth = getAuth(app)

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}) */
