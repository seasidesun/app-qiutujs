import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import Movement from './components/Movement.vue'
import Step from './components/Step.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'movement', path: '/movement/:mId', component: Movement },
        { name: 'step', path: '/step/:sId', component: Step },
    ],
})

export default router