export default {
    data() {
        return {
            article:[],
            loading:false,
        }
    },
    mounted() {
        this.$article = this.$resource('users{/id}', {}, {}, {
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