import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SuiVue from 'semantic-ui-vue'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(SuiVue);
Vue.use(VueCookies)

// import pages
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import SingleTicket from './pages/SingleTicket'
import Shop from './pages/Shop'
import Equipment from './pages/Equipment'
import Man from './pages/Man'
import Wooman from './pages/Wooman'
import Accessories from './pages/Accessories'
import SingleArticle from './pages/SingleArticle'
import Search from './pages/Search'
import Account from './pages/Account'
import Cart from './pages/Cart'

const routes =  [
    {path: '/', component: Home},
    {path: '/tickets', name:'tickets', component: Tickets},
    {path: '/tickets/:id', name:'tickets.view', component: SingleTicket},
    {path: '/shop', name:'shop', component: Shop},
    {path: '/shop/:id', name:'shop.view', component: SingleArticle},
    {path: '/shop/man', name:'shop.man', component: Man},
    {path: '/shop/wooman', name:'shop.wooman', component: Wooman},
    {path: '/shop/accessories', name:'shop.accessories', component: Accessories},
    {path: '/shop/equipment', name:'shop.equipment', component: Equipment},
    {path: '/shop/equipment/:id', name:'shop.equipment.view', component: SingleArticle},
    {path: '/search', name:'search', component: Search},
    {path: '/account', name:'account', component: Account},
    {path: '/cart', name:'cart', component: Cart},
    {path: '*', redirect: '/'}
];

// Router conf
const router = new VueRouter({
    mode: 'history',
    routes
})


// Resource Conf
Vue.http.options.root = 'http://fdsportapi.hoomies.fr/web/fr';
//Vue.http.options.root = 'https://jsonplaceholder.typicode.com';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// Resource hook after
Vue.http.interceptors.push((request, next) => {
    next((response) => {
        if(request.after) {
            request.after.call(this, response)
        }
    })
})


// filters
import moment from 'moment'
Vue.filter('frontEndDateFormat', function(date) {
    if(date){
        return moment(date, 'YYYY-MM-DDH:i:s').format('DD/MM/YYYY')
    }
})

Vue.filter('uppercase', function(value) {
    if(value){
        return value.toUpperCase()
    }
})

Vue.filter('lowercase', function(value) {
    if(value){
        return value.toLowerCase()
    }
})

Vue.filter('nl2br', function nl2br(text) {
    let reg = /\n\r/g
    if (text && text !== null) {
        let i, s = '', lines = text.split(reg), l = lines.length

        for (i = 0; i < l; ++i) {
            s += lines[i];
            (i !== l - 1) && (s += '<br/>')
        }

        return s;
    }
    return text;
})

// Vue conf
import App from './App'
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
