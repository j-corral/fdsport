export default {
    data() {
        return {
            tickets:[],
            products:[],
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
        },
        getProducts() {
            this.$products = this.$resource('products{/id}', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            });
            this.$products.query().then((response) => {
                this.products = response.data
            }, (response) => {
                console.log('error', response)
            })
        }
    },
    mounted(){
        this.getProducts();
        this.getTickets();
    }
}