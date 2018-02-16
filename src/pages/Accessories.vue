<template>
    <div class="ui container">
        <h1 class="ui header">Accessoires</h1>
        <!--<div class="ui fluid grid centered container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="row">
                <div class="link ui cards">
                    <router-link :to="{ name: 'shop.view', params:{id:user.id}}" class="ui medium card" v-for="user in users" :key="user.id">
                        <div class="content">
                            <p>{{user.id}}</p>
                            <p>{{user.name}}</p>
                            <p>{{user.email}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>-->
        <div class="row">
            <div class="ui active loader" v-if="loading"></div>
            <div class="ui four wide column doubling  link cards">
                <router-link :to="{ name: 'shop.view', params:{id:product.product_id}}" class="ui card"  v-for="product in products" :key="product.product_id">
                    <div class="ui small centered image">
                        <img :src="product.featured.url">
                    </div>
                    <div class="content">
                        <div class="meta">
                            <span class="ui small tag label category">{{product.type.name}}</span>
                        </div>
                        <div class="ui clearing divider"></div>
                        <div class="description">
                            <div class="ui small left aligned header">{{product.name}}</div>
                        </div>
                    </div>
                    <div class="extra content">
                        <p class="center aligned"><strong class="ui header">{{product.price}}€</strong></p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script src="../js/accessories.js"></script>