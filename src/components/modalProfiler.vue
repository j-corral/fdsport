<template>
    <div class="profiler">
        <button class="ui basic tiny button" style="background-color: #ffffff !important;position: fixed; right: 5px; z-index: 999;" @click="toggleDebug">
            <i class="large red bug icon center aligned" style="padding-left: 10px;"></i>
        </button>
        <sui-modal v-model="profiler">
            <sui-modal-header>Profiling utilisateur et produit</sui-modal-header>
            <sui-modal-content image>
                <sui-modal-description v-if="this.user" class="scrolling content">
                    <div>
                        <p class="ui header">Informations utilisateur</p>
                        <p><strong>ID: </strong> {{this.user.user_id}}</p>
                        <p><strong>Prénom: </strong> {{this.user.firstname}}</p>
                        <p><strong v-if="this.user.lastname">Nom: </strong> {{this.user.lastname}}</p>
                    </div>
                    <div v-if="this.user.axe">
                        <div class="ui divider"></div>
                        <p class="ui header">Axes utilisateur</p>
                        <p><strong>Homme : </strong>{{this.user.axe.male}}</p>
                        <p><strong>Femme : </strong>{{this.user.axe.female}}</p>
                        <p><strong>Age : </strong>{{this.user.axe.age}}</p>
                        <p><strong>CSP : </strong>{{this.user.axe.csp}}</p>
                        <p><strong>Marque : </strong>{{this.user.axe.brand}}</p>
                        <p><strong>Ville : </strong>{{this.user.axe.city}}</p>
                        <p><strong>Sport : </strong>{{this.user.axe.sport}}</p>
                    </div>
                    <div v-if="this.item">
                        <div class="ui divider"></div>
                        <p class="ui header">Informations du dernier produit visité</p>
                        <p v-if="this.item.product_id"><strong>Type : </strong>Article</p>
                        <p v-else><strong>Type : </strong>Billet de match</p>
                        <!--<p v-if="this.item.sport.name"><strong>Type de match : </strong>{{this.item.sport.name}}</p>-->
                        <p><strong>ID produit : </strong>{{this.item.product_id || this.item.ticket_id}}</p>
                        <!--<p><strong>Nom produit : </strong>{{this.item.name || this.item.home}}</p>-->
                        <p><strong>Prix produit : </strong>{{this.item.price}}€</p>
                        <p v-if="this.item.is_fixed"><strong>Flottant: </strong>{{!this.item.is_fixed}}</p>
                    </div>
                    <div v-if="this.item">
                        <div class="ui divider"></div>
                        <p class="ui header">Axes du dernier produit visité</p>
                        <p><strong>Homme: </strong>{{!this.item.axe.male}}</p>
                        <p><strong>Femme : </strong>{{this.item.axe.female}}</p>
                        <p><strong>Age : </strong>{{this.item.axe.age}}</p>
                        <p><strong>CSP : </strong>{{this.item.axe.csp}}</p>
                        <p><strong>Marque : </strong>{{this.item.axe.brand}}</p>
                        <p><strong>Ville : </strong>{{this.item.axe.city}}</p>
                        <!--<p><strong>Sport : </strong>{{this.item.axe.sport.name}}</p>-->
                    </div>
                    <div v-if="clicks">
                        <div class="ui divider"></div>
                        <p class="ui header">Historique de consultation (antéchronologique)</p>
                        <div v-for="click in clicks" :key="click.click_id">
                            <p v-if="click.product">
                                Article N° {{click.product.product_id}} :
                                <router-link target="_blank" :to="{ name: 'shop.view', params:{id:click.product.product_id}}">{{click.product.name}}</router-link>
                            </p>
                            <p v-if="click.ticket">
                                Billet N°{{click.ticket.ticket_id}}:
                                <router-link target="_blank" :to="{ name: 'tickets.view', params:{id:click.ticket.ticket_id}}"> {{click.ticket.home}}/{{click.ticket.visitor}}</router-link>
                            </p>
                        </div>
                    </div>
                </sui-modal-description>
                <sui-modal-description v-else>
                    <sui-header>Données récupérées</sui-header>
                    <p>Aucune donnée n'est disponible !</p>
                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button floated="right" positive @click.native="toggleDebug">
                    OK
                </sui-button>
            </sui-modal-actions>
        </sui-modal>
    </div>
</template>
<script src="../js/profiler.js"></script>