import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'
import auth from '../src/firebase.js'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
            meta: {
                requiresAuth: true
            }
        }
]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  
    if (requiresAuth && !auth.currentUser) {
      next('/login');
    } else {
      next();
    }
});

export default router