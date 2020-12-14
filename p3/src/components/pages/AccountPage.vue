<template>
    <div id="account-page">
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

           <!--<div id="trips">
                <strong>Your Trips</strong>
                <p v-if="trips && trips.length == 0">
                    No favorites yet.
                </p>
                <li v-for="(trip, key) in trips" v-bind:key="key">
                    {{ trip.name }}
                </li>
            </div>-->

            <button @click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small
                >(Form is prefilled for demonstration purposes; remove in final
                application)</small
            >
            <div>
                <label
                    >Email:
                    <input
                        type="text"
                        data-test="email-input"
                        v-model="data.email"
                /></label>
            </div>
            <div>
                <label
                    >Password:
                    <input
                        type="password"
                        data-test="password-input"
                        v-model="data.password"
                /></label>
            </div>

            <button @click="login" data-test="login-button">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28-api/seeds/user.json
            data: {
                email: 'jill@harvard.edu',
                password: 'asdfasdf',
            },
            errors: null,
        };
    },
    computed: {
        // Get our user and trips state from the Vuex store
        user() {
            return this.$store.state.user;
        },
        trips() {
            return this.$store.state.trips;
        },
    },
    methods: {
        /*loadTrips() {
            if (this.user) {
                // Because trip is a auth-protected resource, this will
                // only return trips belonging to the authenticated user
                axios.get('trip').then((response) => {
                    this.trips = response.data.trip.map((trip) => {
                        return this.$store.getters.getTripById(
                            trip.user_id
                        );
                    });
                });
            }
        },*/
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                    /*this.$router.push({ path: '/' });*/
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
    }/*,
    watch: {
        user() {
            this.loadTrips();
        },
    },*/
    /*mounted() {
        this.loadTrips();
    },*/
};
</script>