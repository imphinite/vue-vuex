import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Tailwind from '../pages/Tailwind.vue'
import Vuex from '../pages/Vuex.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/tailwind',
        name: 'Tailwind',
        component: Tailwind,
    },
    {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
