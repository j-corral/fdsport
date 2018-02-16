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
            user:[],
            loading:false,
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        //check if the id cookie is existing
        var cookieValue = this.$cookies.get("user_id")
        console.log("user_cookie: " + cookieValue)
        if(cookieValue == null) {
            //Generate user id
            var sha1 = require('sha1')
            var user_id = sha1(Date.now())

            //Set new infinite cookie
            this.$cookies.set("user_id",user_id, Infinity)
            console.log("Created cookie: " + this.$cookies.get("user_id"))

            this.$user = this.$resource('users/create', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.$user.save({}, {
                cookie: {
                    name:user_id
                }
            }).then((response) => {
                this.user = response.data
                console.log('sha1 generated : ', user_id)
            }, (response) => {
                console.log('error', response)
            })
        }

    }
}