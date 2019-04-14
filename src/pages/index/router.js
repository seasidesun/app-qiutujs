import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import Movement from './components/Movement.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'movement', path: '/movement/:mId', component: Movement },
    ],
})

export default router