<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>FDSport</title>
    <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">

    <style type="text/css">
        .hidden.menu,
        .hidden.item
        {
            display: none !important;
        }
    </style>
</head>
<body>

<div class="pusher ">
    <div class="ui container grid">
        <div class="row">
            <!--Menu include-->
            <?php
                include("menu/mobile_menu.html");
                include("menu/desktop_tablet_menu.html");
            ?>
        </div>
        <div class="row"></div>
        <!--<div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>-->

        <!-- Page Contents -->

        <!-- News -->
        <div class="row">
            <h2 class="ui header">Nouvautés et actualités</h2>
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
                    <a class="ui blue small card" href="#om">
                        <div class="ui small centered image">
                            <img src="/images/om.jpg">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Orange Velodrome
                            </span>
                        </div>
                    </a>
                    <a class="ui red small card" href="#ol">
                        <div class="ui small centered image">
                            <img src="images/ol.jpg" alt="om">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Groupama stadium
                            </span>
                        </div>
                    </a>
                    <a class="ui green small card" href="#asse">
                        <div class="ui small centered image">
                            <img src="images/as_saint_etienne.jpg" alt="om">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Stade Geoffroy
                            </span>
                        </div>
                    </a>
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
                    <a class="ui blue small card" href="#om">
                        <span class="ui right large corner label">
                            <i class="shop icon"></i>
                        </span>
                        <div class="ui small centered image">
                            <img src="/images/om.jpg">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Orange Velodrome
                            </span>
                        </div>
                    </a>
                    <a class="ui red small card" href="#ol">
                        <div class="ui small centered image">
                            <img src="images/ol.jpg" alt="om">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Groupama stadium
                            </span>
                        </div>
                    </a>
                    <a class="ui green small card" href="#asse">
                        <div class="ui small centered image">
                            <img src="images/as_saint_etienne.jpg" alt="om">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Stade Geoffroy
                            </span>
                        </div>
                    </a>
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
                    <a class="ui blue small card" href="#om">
                        <span class="ui right large corner label">
                            <i class="shop icon"></i>
                        </span>
                        <div class="ui small centered image">
                            <img src="/images/om.jpg">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Orange Velodrome
                            </span>
                        </div>
                    </a>
                    <a class="ui red small card" href="#ol">
                        <div class="ui small centered image">
                            <img src="images/ol.jpg" alt="om">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Groupama stadium
                            </span>
                        </div>
                    </a>
                    <a class="ui green small card" href="#asse">
                        <div class="ui small centered image">
                            <img src="images/as_saint_etienne.jpg" alt="om">
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
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="marker icon"></i>
                                Stade Geoffroy
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
<script src="semantic/dist/semantic.min.js"></script>
</body>
</html>