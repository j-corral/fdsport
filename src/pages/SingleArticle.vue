<template>
    <div class="ui container">
        <h1 class="ui header">{{article.name}}</h1>
        <div class="ui fluid stackable grid left container">
            <div class="ui active loader" v-if="loading"></div>
            <div class="equal width row">
                <div class="ui column cards">
                    <div class="ui medium card">
                        <div class="ui centered image">
                            <img :src="article.featured.url">
                        </div>
                        <div class="content">
                            <!--<div class="meta">
                                <h2 class="ui header">{{article.name | uppercase }}</h2>
                            </div>-->
                            <div class="description">
                                <div class="ui small left aligned">
                                    <p>{{article.intro}}</p>
                                </div>
                            </div>
                            <div class="ui divider"></div>
                            Avis : <sui-rating :rating="3" :max-rating="5"></sui-rating>
                        </div>
                    </div>
                    <div class="ui segment column">
                        <form action="" class="ui form">
                            <div class="two fields">
                                <div class="field">
                                    <label>Couleur</label>
                                    <select class="ui fluid dropdown">
                                        <option value="AL">Bleu</option>
                                        <option value="AK">Noir</option>
                                        <option value="AZ">Blanc</option>
                                        <option value="AR">Gris chiné</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <label>Taille</label>
                                    <select class="ui fluid dropdown">
                                        <option value="AL">XS</option>
                                        <option value="AK">S</option>
                                        <option value="AZ">M</option>
                                        <option value="AR">L</option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <label>Quantité</label>
                                <input type="number" min="1" max="100" value="1">
                            </div>
                            <div class="ui medium left aligned header">
                                <i class="green cube icon"></i>
                                En stock
                            </div>
                            <div class="ui medium right aligned header">
                                <h2>{{article.price}}€</h2>
                            </div>
                            <div class="content">
                                <button class="ui yellow huge button">Ajouter au panier</button>
                            </div>
                        </form>
                    </div>
                    <div class="ui column">
                        <h2>Description</h2>
                        <p v-html="$options.filters.nl2br(article.description)"></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <h2 class="ui header">Produits suggérés</h2>
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
            <div class="row">
                <h2 class="ui header">Avis</h2>
                <div class="ui divided list">
                    <div class="item">
                        <div class="header">Marc.D</div>
                        <sui-rating :rating="0" :max-rating="5"></sui-rating><span class="right aligned">30/03/18</span>
                        <p>J'ai pas aimé ce bas de jogging, reçu rapidement et service acceptable mais je ne rentrais pas dedans</p>
                    </div>
                    <div class="item">
                        <div class="header">John.D</div>
                        <sui-rating :rating="0" :max-rating="5"></sui-rating><span class="right aligned">30/03/18</span>
                        <p>J'ai pas aimé ce bas de jogging, reçu rapidement et service acceptable mais je ne rentrais pas dedans. Dare amicorum Plurimum adhibeatur suadentium pareatur ab studium etiam suadentium amicorum adhibitaeDare amicorum Plurimum adhibeatur suadentium pareatur ab studium etiam suadentium amicorum adhibitae</p>
                    </div>
                    <div class="item">
                        <div class="header">Adrian.D</div>
                        <sui-rating :rating="0" :max-rating="5"></sui-rating><span class="right aligned">30/03/18</span>
                        <p>Ouais</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/singlearticle.js"></script>