import Vue from 'vue';
// import App from "./App.vue";
const App = () => import('./App.vue');
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');

// Check that service workers are supported
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('/service-worker.js');
// }
