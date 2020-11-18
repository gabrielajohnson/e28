import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import TripsPage from '@/components/pages/TripsPage.vue';
import TripCreatePage from '@/components/pages/TripCreatePage.vue';
import TripPage from '@/components/pages/TripPage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/trips', component: TripsPage },
        { path: '/trips/new', component: TripCreatePage },
        { path: '/trips/:id', component: TripPage, props: true },
    ],
})

new Vue({
    router, // equivalent to router: router,
    render: h => h(App),
}).$mount('#app')
