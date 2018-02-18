export default {
    data() {
        return {
            tickets:[],
            products:[],
            currentLocation:false,
            nearestCity:false,
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
        },
        getLocation() {
            if ('geolocation' in navigator) {

                this.$location = this.$resource('city/{name}', {}, {}, {
                    before: () => {
                        this.loading = true
                    },
                    after: () => this.loading = false
                })

                let gl = navigator.geolocation
                gl.getCurrentPosition(function(position) {
                    this.currentLocation = position.coords
                    console.log(this.currentLocation)

                    if(this.currentLocation) {
                        let coordinates = this.currentLocation.latitude + ',' + this.currentLocation.longitude
                        this.$location.query({name: coordinates}).then((response) => {

                            if(response.data.max_distance) {
                                this.nearestCity = response.data.max_distance['50000']['0'].city.toLowerCase()
                                console.log(this.nearestCity)
                            } else {
                                this.nearestCity = false
                            }
                        }, (response) => {
                            console.log('error', response)
                        })
                    }

                }.bind(this)) // bind to `this` so it's the current component.

            } else {
                this.currentLocation = false
                console.log('no geolocation !')
            }
        }
    },
    mounted(){
        this.getProducts()
        this.getTickets()
        this.getLocation()
    }
}