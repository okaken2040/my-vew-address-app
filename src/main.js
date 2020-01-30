import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8HDnBnsmVm3VCDFlCM4gdPoVJWlylJ1o",
  authDomain: "my-address-pj-2c77d.firebaseapp.com",
  databaseURL: "https://my-address-pj-2c77d.firebaseio.com",
  projectId: "my-address-pj-2c77d",
  storageBucket: "my-address-pj-2c77d.appspot.com",
  messagingSenderId: "158945849469",
  appId: "1:158945849469:web:2ed47a28bdcef8f0490114",
  measurementId: "G-YQ5KGYWL98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
