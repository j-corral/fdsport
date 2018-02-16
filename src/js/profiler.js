export default {
    data() {
        return {
            user:false,
            profiler:false
        }
    },
    methods: {
        getUser() {
            let usr = this.$cookies.get("user")
            if(usr) {
                this.user = JSON.parse(usr)
            }
        },
        toggleDebug() {
            console.log('toggle profiler')
            this.getUser()
            this.profiler = !this.profiler
        }
    }
}