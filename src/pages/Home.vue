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
                <h2 class="ui header center aligned">Nouveautés et actualités</h2>
            </div>
            <!-- Todo: add horizontal scroll -->
            <!--<span class="left">
                <i class="large chevron left icon"></i>
            </span>
            <span class="right">
                <i class="large chevron right icon"></i>
            </span>-->

            <div class="row">
                <div class="ui fluid grid centered container">
                    <div class="ui link cards">
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                        <!--<a class="ui blue small card" href="#om">-->
                            <div class="ui small centered image">
                                <img src="../assets/om.jpg">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                    09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui clearing divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">OLYMPIQUE DE MARSEILLE / SC BRAGA</div>
                                    <p>EUROPA LEAGUE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Orange Velodrome
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>29€</b></span>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <div class="ui small centered image">
                                <img src="../assets/ol.jpg" alt="om">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">OLYMPIQUE LYONNAIS / SAINT-ETIENNE</div>
                                    <p>LIGUE 1 CONFORAMA - 27EME JOURNEE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Groupama stadium
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>35€</b></span>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <div class="ui small centered image">
                                <img src="../assets/as_saint_etienne.jpg" alt="om">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">AS SAINT-ETIENNE / MARSEILLE</div>
                                    <p>LIGUE 1 CONFORAMA - 25EME JOURNEE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Stade Geoffroy
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>39€</b></span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header">Promotions</h2>
            </div>
            <div class="row">
                <div class="ui fluid grid centered container">
                    <div class="ui link cards">
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <!--<a class="ui blue small card" href="#om">-->
                            <div class="ui small centered image">
                                <img src="../assets/om.jpg">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                    09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui clearing divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">OLYMPIQUE DE MARSEILLE / SC BRAGA</div>
                                    <p>EUROPA LEAGUE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Orange Velodrome
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>29€</b></span>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <div class="ui small centered image">
                                <img src="../assets/ol.jpg" alt="om">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">OLYMPIQUE LYONNAIS / SAINT-ETIENNE</div>
                                    <p>LIGUE 1 CONFORAMA - 27EME JOURNEE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Groupama stadium
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>35€</b></span>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <div class="ui small centered image">
                                <img src="../assets/as_saint_etienne.jpg" alt="om">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">AS SAINT-ETIENNE / MARSEILLE</div>
                                    <p>LIGUE 1 CONFORAMA - 25EME JOURNEE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Stade Geoffroy
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>39€</b></span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="ui section divider"></div>
            <div class="row">
                <h2 class="ui header">Autour de moi</h2>
            </div>
            <div class="row">
                <div class="ui fluid grid centered container">
                    <div class="ui link cards">
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <!--<a class="ui blue small card" href="#om">-->
                            <div class="ui small centered image">
                                <img src="../assets/om.jpg">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                    09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui clearing divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">OLYMPIQUE DE MARSEILLE / SC BRAGA</div>
                                    <p>EUROPA LEAGUE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Orange Velodrome
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>29€</b></span>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <div class="ui small centered image">
                                <img src="../assets/ol.jpg" alt="om">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">OLYMPIQUE LYONNAIS / SAINT-ETIENNE</div>
                                    <p>LIGUE 1 CONFORAMA - 27EME JOURNEE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Groupama stadium
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>35€</b></span>
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'tickets.view', params:{id:1}}" class="ui blue small card">
                            <div class="ui small centered image">
                                <img src="../assets/as_saint_etienne.jpg" alt="om">
                            </div>
                            <div class="content">
                                <div class="meta">
                                    <span class="ui tiny tag label category">Football</span>
                                    <span class="right floated time">
                                <i class="clock icon"></i>
                                09/02/18 - 19h
                                </span>
                                </div>
                                <div class="ui divider"></div>
                                <div class="description">
                                    <div class="ui small left aligned header">AS SAINT-ETIENNE / MARSEILLE</div>
                                    <p>LIGUE 1 CONFORAMA - 25EME JOURNEE</p>
                                    <span class="left floated">
                                        <i class="marker icon"></i>
                                        Stade Geoffroy
                                    </span>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="right floated">à partir de <b>39€</b></span>
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