// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

import { routerMode } from './config/env'
import routes from './router/router'
import store from './store/'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: routerMode,
})

new Vue({
    router,
    store
}).$mount('#app')