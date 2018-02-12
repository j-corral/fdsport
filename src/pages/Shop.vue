<template>
    <div class="ui container">
        <h1 class="ui header">Boutique</h1>
        <p>Lorem boutique</p>
        <div class="ui fluid grid centered container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="row">
                <div class="ui cards">
                    <div class="ui medium card" v-for="user in users">
                        <div class="content">
                            <p>{{user.id}}</p>
                            <p>{{user.name}}</p>
                            <p>{{user.email}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/shop.js"></script>