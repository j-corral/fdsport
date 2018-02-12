export default {
    data() {
        return {
            ticket:[],
            loading:false,
        }
    },
    mounted() {
        this.$ticket = this.$resource('comments{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$ticket.query({id:this.$route.params.id}).then((response) => {
            this.ticket = response.data
            console.log(this.ticket)
        }, (response) => {
            console.log('error', response)
        })
    }
}