import menuMobile from '../components/menuMobile'
import menuMobileTop from '../components/menuMobileTop'
import menuDesktop from '../components/menuDesktop'

export default {
    name: 'app',
    components: {
        menuMobile, menuMobileTop, menuDesktop
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}