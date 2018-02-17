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
            this.$ticket = this.$resource('tickets/shortly/3', {}, {}, {
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
            this.$products = this.$resource('products/newest/4', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            });
            this.$products.query().then((response) => {
                    this.products = response.data;
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