<template>
    <div class="ui container">
        <h1 class="ui header">Boutique</h1>
        <div class="ui stackable grid  container">

            <!--Tablet and Computer menu-->
            <div class="tablet computer only twelve wide centered row">
                <div class="three wide column">
                    <router-link :to="{ name: 'shop.man'}" class="ui move reveal">
                        <div class="visible content">
                            <img src="../assets/collection_homme.jpg" class="ui medium image">
                        </div>
                        <div class="hidden centered content">
                            <br/><br/><br/>
                            <h3>Collection<br>Homme</h3>
                        </div>
                    </router-link>
                </div>
                <div class="three wide column">
                    <router-link :to="{ name: 'shop.wooman'}" class="ui move reveal">
                        <div class="visible content">
                            <img src="../assets/collection_femme.jpg" class="ui medium image">
                        </div>
                        <div class="hidden centered content">
                            <br/><br/><br/>
                            <h3>Collection<br>Femme</h3>
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

            <!--Mobile menu-->
            <div class="mobile only row">
                <router-link :to="{ name: 'shop.man'}" class="column">
                    <h2>Collection Homme</h2>
                </router-link>
                <router-link :to="{ name: 'shop.wooman'}" class="column">
                    <h2>Collection Femme</h2>
                </router-link>
                <router-link :to="{ name: 'shop.accessories'}" class="column">
                    <h2>Accessoires</h2>
                </router-link>
            </div>

            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header">Tous les articles</h2>
            </div>
            <div class="row">
                <div class="ui active loader" v-if="loading"></div>
            </div>
        </div>
       <div class="row">
           <div class="ui four wide column doubling  link cards">
               <router-link :to="{ name: 'shop.equipment.view', params:{id:product.product_id}}" class="ui card"  v-for="product in products" :key="product.product_id">
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
</template>
<script src="../js/shop.js"></script>