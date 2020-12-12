import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/common/store.js'

import TripsPage from '@/components/pages/TripsPage.vue';
import TripCreatePage from '@/components/pages/TripCreatePage.vue';
import TripPage from '@/components/pages/TripPage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import AccessDeniedPage from '@/components/pages/AccessDeniedPage.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: TripsPage, meta: {requiresAuth: true} },
        { path: '/trips/new', component: TripCreatePage, meta: {requiresAuth: true} },
        { path: '/trips/:id', component: TripPage, props: true },
        { path: '/account', component: AccountPage },
        { path: '/denied', component: AccessDeniedPage },
        { path: '/register', component: RegisterPage, meta: {disableIfLoggedIn: true} },
    ],
})


router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const disableIfLoggedIn = to.matched.some(record => record.meta.disableIfLoggedIn);

   
    const decide = () => {
        if ((requiresAuth && !store.state.user) || disableIfLoggedIn && store.state.user){
            next('/denied');
        }
        else {
            next();
        }
    }

    // If we don't have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }

});

new Vue({
	store: store,
    router, // equivalent to router: router,
    render: h => h(App),
}).$mount('#app')
