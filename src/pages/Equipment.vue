<template>
    <div class="ui container">
        <h1 class="ui header">Matériel</h1>
        <!--<div class="ui fluid grid centered container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="row">
                <div class="link ui cards">
                    <router-link :to="{ name: 'shop.equipment.view', params:{id:user.id}}" class="ui medium card" v-for="user in users" :key="user.id">
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
                <router-link :to="{ name: 'shop.equipment.view', params:{id:equipment.product_id}}" class="ui card"  v-for="equipment in equipments" :key="equipment.product_id">
                    <div class="ui small centered image">
                        <img :src="equipment.featured.url">
                    </div>
                    <div class="content">
                        <div class="meta">
                            <span class="ui small tag label category">{{equipment.type.name}}</span>
                        </div>
                        <div class="ui clearing divider"></div>
                        <div class="description">
                            <div class="ui small left aligned header">{{equipment.featured.name}}</div>
                        </div>
                    </div>
                    <div class="extra content">
                        <p class="center aligned"><strong class="ui header">{{equipment.price}}€</strong></p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script src="../js/equipment.js"></script>