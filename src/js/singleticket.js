export default {
    data() {
        return {
            ticket:[],
            tickets:[],
            loading:false,
        }
    },
    methods: {
        getTicket() {
            this.$ticket = this.$resource('tickets{/id}', {}, {}, {
                before: () => {
                    this.loading = true
                },
                after: () => this.loading = false
            })
            this.$ticket.query({id:this.$route.params.id}).then((response) => {
                this.ticket = response.data
                this.$cookies.set("item", JSON.stringify(this.ticket), Infinity);
                // console.log(this.ticket)
            }, (response) => {
                console.log('error', response)
            })
        },
        trackUserTicket() {
            //check if the id cookie is existing
            var user_id = this.$cookies.get("user_id");
            if (user_id == null) {
                //Generate user id
                var sha1 = require('sha1');
                user_id = sha1(Date.now());

                //Set new infinite cookie
                this.$cookies.set("user_id", user_id, Infinity);
            }

            // Send put click request
            this.$user = this.$resource('clicks/ticket{/id}', {}, {}, {
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
                // console.log('Put envoyé', this.user)
            }, (response) => {
                console.log('error', response)
            })
        },
        getSuggestedTickets() {
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
        }
    },
    mounted() {
        this.getTicket();
        this.trackUserTicket();
        this.getSuggestedTickets();
    }

}