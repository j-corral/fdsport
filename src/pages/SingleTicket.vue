<template>
    <div class="ui container">
        <h1 class="ui header">Billet</h1>
        <div class="ui fluid grid left container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="row">
                <div class="ui cards">
                    <div class="ui medium card">
                        <div class="ui small centered image">
                            <img :src="'https://picsum.photos/200/300?image='+ticket.id">
                        </div>
                        <div class="content">
                            <div class="meta"><h2 class="ui headers">{{ticket.name}}</h2></div>
                            <div class="description">
                                <div class="ui small left aligned header">
                                    <p>{{ticket.body}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/singleticket.js"></script>