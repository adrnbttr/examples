// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import auth from '@/auth.js'

import taskItem from './components/TaskItem.vue'
import addElement from './components/AddElement.vue'
Vue.component('task-item', taskItem);
Vue.component('add-element', addElement);

Vue.config.productionTip = false

auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})