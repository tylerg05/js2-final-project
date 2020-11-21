import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/login', name: 'login', component: LogIn },
    { path: '/register', name: 'register', component: Register },
    { path: '/', name: 'home', component: HelloWorld },
    //{ path: '/edit/:id', name: 'edit', component:DogEdit }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router