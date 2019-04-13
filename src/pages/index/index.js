import Vue from 'vue'
import App from './app.vue'
import Router from './router.js'

new Vue({
    el: '#app',
    router: Router,
    render: (h) => h(App),
})
