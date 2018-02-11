<template>
    <div class="ui tablet computer only grid">
        <div class="ui top fixed menu">
            <div class="ui container">
                <router-link to="/" class="header item borderless">FDSport</router-link>

                <div class="right menu">
                    <router-link :to="{ name: 'tickets'}" class="item borderless">Billeterie</router-link>
                    <router-link :to="{ name: 'shop'}" class="item borderless">Boutique</router-link>
                    <router-link :to="{ name: 'shop.equipment'}" class="item borderless">Matériel</router-link>
                    <!--<div class="ui icon input">
                        <input type="text" placeholder="Recherche...">
                        <i class="search icon"></i>
                    </div>-->
                    <router-link :to="{ name: 'search'}" class="item borderless">
                        <i class="large search icon grey"></i>
                    </router-link>
                    <router-link :to="{ name: 'account'}" class="item borderless">
                        <i class="large user icon grey"></i>
                    </router-link>
                    <router-link :to="{ name: 'cart'}" class="item borderless">
                        <i class="large shopping bag icon grey"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>