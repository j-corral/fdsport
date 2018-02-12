<template>
    <div class="ui container">
        <h1 class="ui header">Boutique</h1>
        <div class="ui fluid grid centered container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="row">
                <div class="ui cards">
                    <router-link :to="{ name: 'shop.equipment.view', params:{id:user.id}}" class="ui medium card" v-for="user in users" :key="user.id">
                        <div class="content">
                            <p>{{user.id}}</p>
                            <p>{{user.name}}</p>
                            <p>{{user.email}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/shop.js"></script>