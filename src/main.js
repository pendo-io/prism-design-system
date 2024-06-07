import Vue from 'vue';
import router from './router';
import App from './App.vue';
import './main.scss';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router
}).$mount('#app');
