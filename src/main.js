import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SuiVue from 'semantic-ui-vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(SuiVue);

// import pages
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import SingleTicket from './pages/SingleTicket'
import Shop from './pages/Shop'
import Equipment from './pages/Equipment'
import Search from './pages/Search'
import Account from './pages/Account'
import Cart from './pages/Cart'

const routes =  [
    {path: '/', component: Home},
    {path: '/tickets', name:'tickets', component: Tickets},
    {path: '/tickets/:id', name:'view', component: SingleTicket},
    {path: '/shop', name:'shop', component: Shop},
    {path: '/shop/equipment', name:'shop.equipment', component: Equipment},
    {path: '/search', name:'search', component: Search},
    {path: '/account', name:'account', component: Account},
    {path: '/cart', name:'cart', component: Cart},
    {path: '*', redirect: '/'}
];

// Router conf
const router = new VueRouter({
    mode: 'history',
    routes
});


// Resource Conf
Vue.http.options.root = 'https://jsonplaceholder.typicode.com';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// Resource hook after
Vue.http.interceptors.push((request, next) => {
    next((response) => {
        if(request.after) {
            request.after.call(this, response)
        }
    })
})


// Vue conf
import App from './App'
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
