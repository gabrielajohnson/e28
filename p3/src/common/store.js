import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        trips: [],
        user: null
    },
    mutations: {
        setTrips(state, payload) {
            state.trips = payload;
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
        }
    }
})