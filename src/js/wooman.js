export default {
    data() {
        return {
            products:[],
            loading:true,
        }
    },
    methods: {
        getProductsWooman() {
            this.products = this.$resource('products/wooman', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.products.query().then((response) => {
                this.products = response.data
            }, (response) => {
                console.log('error', response)
            })
        }
    },
    mounted() {
        this.getProductsWooman()
    }
}