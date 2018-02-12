export default {
    data() {
        return {
            users:[],
            loading:false,
        }
    },
    mounted() {
        this.$user = this.$resource('users{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$user.query().then((response) => {
            this.users = response.data
        }, (response) => {
            console.log('error', response)
        })
    }
}