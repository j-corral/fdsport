<template>
    <div class="ui container">
        <h1 class="ui header">Billeterie</h1>
        <p>Lorem tickets</p>
        <div class="ui fluid grid centered container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="row">
                <div class="ui link cards">
                    <router-link :to="{ name: 'tickets.view', params:{id:ticket.id}}" class="ui medium card" v-for="ticket in tickets" :key="ticket.id">
                        <div class="ui small centered image">
                            <img :src="'https://picsum.photos/200/300?image='+ticket.id">
                        </div>
                        <div class="content">
                            <div class="description">
                                <div class="ui small left aligned header">
                                    {{ticket.title}}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/tickets.js"></script>