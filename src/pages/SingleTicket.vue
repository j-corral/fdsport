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
                <h2 class="ui header">Produits associés</h2>
                <div class="row">
                    <div class="ui fluid grid centered container">
                        <div class="ui link cards">
                            <a class="ui blue small card" href="#om">
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
                            </a>
                            <a class="ui red small card" href="#ol">
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
                            </a>
                            <a class="ui green small card" href="#asse">
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
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/singleticket.js"></script>