export default {
    data() {
        return {
            user:[],
            loading:false,
        }
    },
    mounted() {
        this.$user = this.$resource('users/create', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$user.save({}, {
            cookie: {
                name:'jonathan'
            }
        }).then((response) => {
            this.user = response.data
        }, (response) => {
            console.log('error', response)
        })
    }
}