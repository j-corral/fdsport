export default {
    data() {
        return {
            equipments:[],
            loading:true,
        }
    },
    mounted() {
        this.equipments = this.$resource('products{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.equipments.query().then((response) => {
            this.equipments = response.data
        }, (response) => {
            console.log('error', response)
        })
    }
}