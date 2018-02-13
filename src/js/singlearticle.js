export default {
    data() {
        return {
            article:[],
            loading:true,
        }
    },
    mounted() {
        this.$article = this.$resource('products{/id}', {}, {}, {
            before: () => {
                this.loading = true
            },
            after: () => this.loading = false
        })
        this.$article.query({id:this.$route.params.id}).then((response) => {
            this.article = response.data
            console.log(this.article)
        }, (response) => {
            console.log('error', response)
        })
    }
}