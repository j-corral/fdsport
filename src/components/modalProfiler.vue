<template>
    <div class="profiler">
        <button class="ui basic tiny button" style="background-color: #ffffff !important;position: fixed; right: 5px; z-index: 999;" @click="toggleDebug">
            <i class="large red bug icon center aligned" style="padding-left: 10px;"></i>
        </button>
        <sui-modal v-model="profiler">
            <sui-modal-header>Profiling utilisateur</sui-modal-header>
            <sui-modal-content image>
                <sui-modal-description v-if="this.user" class="scrolling content">
                    <div>
                        <p class="ui header">Informations</p>
                        <p><strong>ID: </strong> {{this.user.user_id}}</p>
                        <p><strong>Prénom: </strong> {{this.user.firstname}}</p>
                        <p><strong v-if="this.user.lastname">Nom: </strong> {{this.user.lastname}}</p>
                    </div>
                    <div v-if="this.user.axe">
                        <div class="ui divider"></div>
                        <p class="ui header">Axes</p>
                        <p><strong>Homme : </strong>{{this.user.axe.male}}</p>
                        <p><strong>Femme : </strong>{{this.user.axe.female}}</p>
                        <p><strong>Age : </strong>{{this.user.axe.age}}</p>
                        <p><strong>CSP : </strong>{{this.user.axe.csp}}</p>
                        <p><strong>Brand : </strong>{{this.user.axe.brand}}</p>
                        <p><strong>City : </strong>{{this.user.axe.city}}</p>
                        <p><strong>Sport : </strong>{{this.user.axe.sport}}</p>
                    </div>
                    <!--<div>
                        <div class="ui divider"></div>
                        <p class="ui header">Articles consultés</p>
                        Todo get clicks by user id
                    </div>-->
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