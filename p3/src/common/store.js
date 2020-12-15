import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        trips: [],
        triplists: [],
        triplistitems: [],
        user: null
    },
    mutations: {
        setTrips(state, payload) {
            state.trips = payload;
        },
        setTripLists(state, payload) {
            state.triplists = payload;
        },
        setTripListItems(state, payload) {
            state.triplistitems = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        fetchTrips(context) {
            axios.get('trip').then((response) => {
                context.commit('setTrips', response.data.trip);
            });
        },
        fetchTripLists(context) {
            axios.get('triplist').then((response) => {
                context.commit('setTripLists', response.data.triplist);
            });
        },
        fetchTripListItems(context) {
            axios.get('triplistitem').then((response) => {
                context.commit('setTripListItems', response.data.triplistitem);
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        getTripById(state) {
            return function (id) {
                return state.trips.filter((trip) => {
                    return trip.id == id;
                }, this.id)[0];
            }
        },
        getTripListById(state) {
            return function (id) {
                return state.triplists.filter((trip) => {
                    return trip.id == id;
                }, this.id)[0];
            }
        },
        getTripListItemById(state) {
            return function (id) {
                return state.triplistitems.filter((trip) => {
                    return trip.id == id;
                }, this.id)[0];
            }
        }
    }
})