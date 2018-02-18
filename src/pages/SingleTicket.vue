<template>
    <div class="ui container">
        <h1 class="ui header">Billet</h1>
        <div class="ui fluid stackable grid left container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="ui small image">
                <img :src="ticket.featured.url">
            </div>
            <div>
                <h2 class="ui header">{{ticket.home | uppercase}} / {{ticket.visitor | uppercase}}</h2>
                <p>{{ticket.intro}}</p>
            </div>
            <div class="equal width row">
                <div class="ui column cards">
                    <div class="ui segment column">
                        <form action="" class="ui form">
                            <h2 class="ui headers">Emplacement</h2>
                            <h3 class="ui headers">Catégorie 1</h3>
                            <div class="ui divided list">
                                <div class="item">
                                    <div class="header">Est Basse <i class="green checkmark icon"></i>Disponible
                                        <br/>54,50€
                                    <input class="ui right floated" type="number" min="0" max="100" value="0" style="width: 70px;"></div>
                                </div>
                                <div class="item">
                                    <div class="header">Est Inter <i class="red remove icon"></i>Complet
                                        <br/>54,50€
                                    <input class="ui right floated" type="number" min="0" max="100" value="0" style="width: 70px;" disabled></div>
                                </div>
                            </div>
                            <h3 class="ui headers">Catégorie 2</h3>
                            <div class="ui divided list">
                                <div class="item">
                                    <div class="header">Nord Basse <i class="red remove icon"></i>Complet
                                        <br/>18€
                                    <input class="ui right floated" type="number" min="0" max="100" value="0" style="width: 70px;" disabled></div>
                                </div>
                                <div class="item">
                                    <div class="header">Nord Inter <i class="green checkmark icon"></i>Disponible
                                        <br/>18€
                                    <input class="ui right floated" type="number" min="0" max="100" value="0" style="width: 70px;"></div>
                                </div>
                                <div class="item">
                                    <div class="header">Sud Basse <i class="green checkmark icon"></i>Disponible
                                        <br/>18€
                                    <input class="ui right floated" type="number" min="0" max="100" value="0" style="width: 70px;"></div>
                                </div>
                                <div class="item">
                                    <div class="header">Sud Haute <i class="red remove icon"></i>Complet
                                        <br/>18€
                                    <input class="ui right floated" type="number" min="0" max="100" value="0" style="width: 70px;" disabled></div>
                                </div>
                                <div class="ui medium right aligned header">
                                    <h2>Total:  {{ticket.price}}€</h2>
                                    <button class="ui yellow huge button">Ajouter au panier</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="ui column">
                        <h2>Description</h2>
                        <p>
                            <strong>Match : </strong> {{ticket.home | uppercase}} / {{ticket.visitor | uppercase}}
                        </p>
                        <p><strong>Adresse : </strong> {{ticket.address}}</p>
                        <p><strong>Type : </strong> {{ticket.sport.name}}</p>
                        <p><strong>Date : </strong> {{ticket.date | frontEndDateFormat}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <sui-accordion>
                    <a is="sui-accordion-title">
                        <h2><sui-icon name="dropdown" />Plan d'accès</h2>
                    </a>
                    <sui-accordion-content>
                        <img class="ui fluid rounded image" src="../assets/maps.jpg" alt="maps" style="max-height:70vh">
                    </sui-accordion-content>
                </sui-accordion>
            </div>
            <div class="row">
                <h2 class="ui header">Produits suggérés</h2>
                <router-link :to="{ name: 'shop'}" class="ui left pointing label">voir plus..</router-link>
            </div>
            <div class="ui fluid grid centered container">
                <div class="row">
                    <div class="ui link cards">
                        <div class="ui four wide column doubling  link cards">
                            <router-link target="_blank" :to="{ name: 'shop.view', params:{id:product.product_id}}" class="ui card"  v-for="product in products" :key="product.product_id">
                                <div class="ui small centered image">
                                    <img :src="product.featured.url">
                                </div>
                                <div class="content">
                                    <div class="meta">
                                        <span class="ui small tag label category">{{product.type.name}}</span>
                                        <span class="ui small tag red label category" v-if="!product.is_fixed">Floating</span>
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
            <!--<div class="ui fluid grid centered container">
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
            </div>-->
        </div>
    </div>
</template>
<script src="../js/singleticket.js"></script>