export default {
    data() {
        return {
            tickets:[],
            loading:false,
        }
    },
    mounted() {
        this.$ticket = this.$resource('posts{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$ticket.query().then((response) => {
            this.tickets = response.data
        }, (response) => {
            console.log('error', response)
        })
    }
}