<template>
    <div class="ui mobile only grid">
        <div class="ui top fixed menu">
            <div class="ui grid" style="width:100%">
                <div class="left floated column">
                    <a @click="goBack" class="item borderless">
                        <i class="large angle left icon grey"></i>
                    </a>
                </div>
                <div class="column">
                    <router-link to="/" class="header item borderless"><img src="../assets/logo_FD_noir.png" alt="logo"></router-link>
                </div>
                <div class="right floated column">
                    <router-link :to="{ name: 'cart'}" class="item borderless">
                        <i class="large shopping bag icon grey"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            goBack() {window.history.back();}
        }
    }
</script>