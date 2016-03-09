'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './routers';
import $ from 'jquery';
require('../node_modules/semantic-ui-css/semantic.min.js');
require('../node_modules/semantic-ui-css/semantic.min.css');

Vue.use(VueRouter);

let router = new VueRouter({
    hashbang: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: "active"
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");