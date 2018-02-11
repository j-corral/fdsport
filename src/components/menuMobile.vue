<template>
    <div class="ui mobile only grid">
        <div class="ui bottom fixed menu">
            <div class="ui container grid">
                <div class="three wide column">
                    <router-link :to="{ name: 'tickets'}" class="item borderless">
                        <i class="large ticket icon"></i>
                    </router-link>
                </div>
                <div class="three wide column">
                    <router-link :to="{ name: 'shop'}" class="item borderless">
                        <i class="large shop icon"></i>
                    </router-link>
                </div>
                <div class="three wide column">
                    <router-link to="/" class="header item borderless">
                        <i class="large home icon"></i>
                    </router-link>
                </div>
                <div class="three wide column">
                    <router-link :to="{ name: 'search'}" class="item borderless">
                        <i class="large search icon grey"></i>
                    </router-link>
                </div>
                <div class="three wide column">
                    <router-link :to="{ name: 'account'}" class="item borderless">
                        <i class="large user icon grey"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>