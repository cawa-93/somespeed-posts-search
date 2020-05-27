import Vue from 'vue';
// import App from "./App.vue";



let options = {
	root: document.querySelector('header'),
    rootMargin: '0px',
    threshold: 1
}

const appRoot = document.querySelector('#app')

let observer = new IntersectionObserver(async (entries) => {

	const { isIntersecting, intersectionRatio } = entries[0]

	if (intersectionRatio < 1 || !isIntersecting) {
		return
	}

    const App = () => import('./App.vue');

    const {default: Vue} = await import('vue')

    console.log(Vue)


    Vue.config.productionTip = process.env.NODE_ENV === 'production';

    new Vue({
        render: h => h(App),
    }).$mount(appRoot);


    observer.disconnect()


}, options);

observer.observe(appRoot)


// Check that service workers are supported
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('/service-worker.js');
// }
