<template>
    <div class="ui container">
        <h1 class="ui header">Boutique</h1>
        <div class="ui stackable grid centered container">
            <div class="ui active loader" v-if="loading"></div>

            <!--Tablet and Computer menu-->
            <div class="tablet computer only twelve wide centered row">
                <div class="three wide column">
                    <router-link :to="{ name: 'shop'}" class="ui move reveal">
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
                    <router-link :to="{ name: 'shop'}" class="ui move reveal">
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
                    <router-link :to="{ name: 'shop'}" class="ui move reveal">
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

            <!--Mobile menu-->
            <div class="mobile only row">
                <router-link :to="{ name: 'shop'}" class="column">
                    <h2>Collection Homme</h2>
                </router-link>
                <router-link :to="{ name: 'shop'}" class="column">
                    <h2>Collection Femme</h2>
                </router-link>
                <router-link :to="{ name: 'shop'}" class="column">
                    <h2>Accessoires</h2>
                </router-link>
            </div>

            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header">Tous les articles</h2>
            </div>
            <br/><br/><br/><br/>
            <div class="row">
                <div class="ui cards">
                <!--<sui-card-group>-->
                    <router-link :to="{ name: 'shop.equipment.view', params:{id:user.id}}" v-for="user in users" :key="user.id">
                        <sui-card>
                            <sui-dimmer-dimmable @mouseenter.native="cardActive[user.id] = true" @mouseleave.native="cardActive[user.id] = false">
                                <sui-image src="https://picsum.photos/200/300?image=1" />
                                <sui-dimmer blurring :active="cardActive[user.id]">
                                    <sui-button inverted>Voir l'article</sui-button>
                                </sui-dimmer>
                            </sui-dimmer-dimmable>
                            <sui-card-content>
                                <sui-card-header>{{user.name}}</sui-card-header>
                                <sui-card-meta>{{user.email}}</sui-card-meta>
                            </sui-card-content>
                            <sui-card-content extra>
                                <p>{{user.id}}</p>
                            </sui-card-content>
                        </sui-card>
                    </router-link>
                </div>
                <!--</sui-card-group>-->
            </div>
        </div>
    </div>
</template>
<script src="../js/shop.js"></script>