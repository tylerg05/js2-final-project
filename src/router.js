import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login'
import Register from './components/Register'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]
});

export default router