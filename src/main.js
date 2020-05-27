let options = {
	root: document.querySelector('header'),
    rootMargin: '0px',
    threshold: 0
}


const appRoot = document.querySelector('#app')

let observer = new IntersectionObserver(async (entries) => {

	const { isIntersecting, intersectionRatio } = entries[0]

	if (intersectionRatio < 1 || !isIntersecting) {
		return
	}

    const { App, Vue } = await import(/* webpackChunkName: "App.vue" */'@/chunk');

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
