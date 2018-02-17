<template>
    <div id="home">
        <div class="ui container grid">

            <div class="row">
                <h3 class="ui header">Ajouter votre club</h3>
            </div>
            <div class="row">
                <form action="#" class="ui form">
                    <div class="inline fields">
                        <div class="field">
                            <input type="text" placeholder="Votre club">
                        </div>
                        <div class="ui submit button">Ajouter</div>
                    </div>
                </form>
            </div>

            <!-- News -->
            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header center aligned">Prochainement</h2>
                <router-link :to="{ name: 'tickets'}" class="ui left pointing label">
                    voir plus..
                </router-link>
            </div>
            <!-- Todo: add horizontal scroll -->
            <!--<span class="left">
                <i class="large chevron left icon"></i>
            </span>
            <span class="right">
                <i class="large chevron right icon"></i>
            </span>-->

            <div class="ui fluid grid centered container">
                <div class="row">
                    <div class="ui link cards">
                        <router-link :to="{ name: 'tickets.view', params:{id:ticket.ticket_id}}" class="ui card" :class="ticket.sport.color" v-for="ticket in tickets" :key="ticket.ticket_id">
                            <div class="ui tiny centered image">
                                <img :src="ticket.featured.url">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui small tag label category">{{ticket.sport.name}}</span>
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
            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header">Nouveautés</h2>
                <router-link :to="{ name: 'shop'}" class="ui left pointing label">
                    voir plus..
                </router-link>
            </div>
            <div class="ui fluid grid centered container">
                <div class="row">
                    <div class="ui link cards">
                        <div class="ui four wide column doubling  link cards">
                            <router-link :to="{ name: 'shop.view', params:{id:product.product_id}}" class="ui card"  v-for="product in products" :key="product.product_id">
                                <div class="ui small centered image">
                                    <img :src="product.featured.url">
                                </div>
                                <div class="content">
                                    <div class="meta">
                                        <span class="ui small tag label category">{{product.type.name}}</span>
                                    </div>
                                    <div class="ui clearing divider"></div>
                                    <div class="description">
                                        <div class="ui small left aligned header">{{product.name}}</div>
                                        <p>{{product.intro}}</p>
                                    </div>
                                </div>
                                <div class="extra content">
                                    <p class="center aligned"><strong class="ui header">{{product.price}}€</strong></p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header">Autour de moi</h2>
                <router-link :to="{ name: 'tickets'}" class="ui left pointing label">voir plus..</router-link>
            </div>
            <div class="ui fluid grid centered container">
                <div class="row">
                    <div class="ui link cards">
                        <router-link :to="{ name: 'tickets.view', params:{id:ticket.ticket_id}}" class="ui card" :class="ticket.sport.color" v-for="ticket in tickets" :key="ticket.ticket_id">
                            <div class="ui tiny centered image">
                                <img :src="ticket.featured.url">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui small tag label category">{{ticket.sport.name}}</span>
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

            <!--Links to articles-->
            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header center aligned">Plus d'articles</h2>
            </div>
            <div class="twelve wide centered row">
                    <div class="three wide column">
                        <router-link :to="{ name: 'shop.man'}" class="ui move reveal">
                            <div class="visible content">
                                <img src="../assets/collection_homme.jpg" class="ui medium image">
                            </div>
                            <div class="hidden centered content">
                                <br/><br/><br/><br/>
                                <h3>Collection Homme</h3>
                            </div>
                        </router-link>
                    </div>
                    <div class="three wide column">
                        <router-link :to="{ name: 'shop.wooman'}" class="ui move reveal">
                            <div class="visible content">
                                <img src="../assets/collection_femme.jpg" class="ui medium image">
                            </div>
                            <div class="hidden centered content">
                                <br/><br/><br/><br/>
                                <h3>Collection Femme</h3>
                            </div>
                        </router-link>
                    </div>
                    <div class="three wide column">
                        <router-link :to="{ name: 'shop.accessories'}" class="ui move reveal">
                            <div class="visible content">
                                <img src="../assets/accessoires.jpg" class="ui medium image">
                            </div>
                            <div class="hidden centered content">
                                <br/><br/><br/><br/>
                                <h3>Accessoires</h3>
                            </div>
                        </router-link>
                    </div>
                    <div class="three wide column">
                        <router-link :to="{ name: 'shop.equipment'}" class="ui move reveal">
                            <div class="visible content">
                                <img src="../assets/materiel.jpg" class="ui medium image">
                            </div>
                            <div class="hidden centered content">
                                <br/><br/><br/><br/>
                                <h3>Matériel</h3>
                            </div>
                        </router-link>
                    </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/home.js"></script>