export default {
    data() {
        return {
            tickets:[],
            loading:false,
        }
    },
    methods: {
        getTickets() {
            this.$ticket = this.$resource('tickets{/id}', {}, {}, {
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
    },
    mounted() {
        this.getTickets()
    }
}