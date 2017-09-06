import Vue from 'vue';
import App from './App.vue';
import loading from './components/loading'; //引入自定义的组件
Vue.use(loading);
new Vue({
  el: '#app',
  loading,
  render: h => h(App)
})
