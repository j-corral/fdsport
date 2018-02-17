export default {
    data() {
        return {
            article:[],
            // user:[],
            loading:true,
        }
    },
    methods: {
        getProduct() {
            this.$article = this.$resource('products{/id}', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.$article.query({id: this.$route.params.id}).then((response) => {
                this.article = response.data
                this.$cookies.set("item", JSON.stringify(this.article), Infinity);
                // console.log(this.article)
            }, (response) => {
                console.log('error', response)
            })
        },
        trackUserProduct() {
            //check if the id cookie is existing
            let user_id = this.$cookies.get("user_id");
            if (user_id == null) {
                //Generate user id
                var sha1 = require('sha1');
                user_id = sha1(Date.now());

                //Set new infinite cookie
                this.$cookies.set("user_id", user_id, Infinity);
            }

            // Send put click request
            this.$user = this.$resource('clicks/product{/id}', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.$user.update({id: this.$route.params.id}, {
                cookie: {
                    name: user_id
                }
            }).then((response) => {
                this.user = response.data
                this.$cookies.set("user", JSON.stringify(this.user), Infinity);
                // console.log('Put envoyé', this.user)
            }, (response) => {
                console.log('error', response)
            })
        }
    },
    mounted() {
        this.getProduct()
        this.trackUserProduct()
    }
}