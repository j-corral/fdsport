export default {
    data() {
        return {
            products:[],
            loading:false,
            cardActive:[],
        }
    },
    mounted() {
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
}