import menuMobile from '../components/menuMobile'
import menuDesktop from '../components/menuDesktop'

export default {
    name: 'app',
    components: {
        menuMobile, menuDesktop
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}