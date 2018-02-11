import Vue from 'vue'
import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue'

Vue.use(VueRouter);
Vue.use(SuiVue);

// import pages
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Shop from './pages/Shop'
import Equipment from './pages/Equipment'
import Search from './pages/Search'
import Account from './pages/Account'
import Cart from './pages/Cart'

const routes =  [
    {path: '/', component: Home},
    {path: '/tickets', name:'tickets', component: Tickets},
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

// Vue conf
import App from './App'
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
