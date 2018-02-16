<template>
    <div class="ui grid">
        <div class="ui container">
            <h1 class="ui header">Billeterie</h1>
            <div class="row">
                <div class="ui active loader" v-if="loading"></div>
                <div class="ui four wide column doubling  link cards">
                    <router-link :to="{ name: 'tickets.view', params:{id:ticket.ticket_id}}" class="ui card" :class="ticket.sport.color" v-for="ticket in tickets" :key="ticket.ticket_id">
                        <div class="ui tiny centered image">
                            <img :src="ticket.featured.url">
                        </div>
                        <div class="content">
                            <div class="meta">
                                <span class="ui small tag label category">{{ticket.sport.name}}</span>
                                <!--<span class="ui small tag red label category" v-if="!ticket.axe">Floating</span>-->
                                <span class="right floated time">
                                    <i class="clock icon"></i>{{ticket.date | frontEndDateFormat}}
                                </span>
                            </div>
                            <div class="ui clearing divider"></div>
                            <div class="description">
                                <div class="ui small left aligned header">{{ticket.home | uppercase}} / {{ticket.visitor | uppercase}}</div>
                                <p>{{ticket.intro}}</p>
                                <p class="center aligned" style="margin-top:2em;">
                                    <i class="marker icon"></i>
                                    {{ticket.address}}
                                </p>
                            </div>
                        </div>
                        <div class="extra content">
                            <p class="center aligned">à partir de <strong class="ui header">{{ticket.price}}€</strong></p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/tickets.js"></script>