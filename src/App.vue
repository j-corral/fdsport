<template>
    <div id="app">
        <div class="ui main">
            <div class="row">
                <!--Menu desktop include-->
                <menu-desktop></menu-desktop>
                <!--Menu mobile include-->
                <menu-mobile></menu-mobile>
                <menu-mobile-top></menu-mobile-top>
                <!-- modal profiler include -->
                <modal-profiler></modal-profiler>
            </div>
            <div class="row">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script src="./js/app.js"></script>
<style src="./css/app.scss" lang="scss"></style>