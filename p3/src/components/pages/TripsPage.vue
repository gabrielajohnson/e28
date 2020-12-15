<template>
    <div id="trips">
        <h1>Trips</h1>

        <router-link
            v-for="trip in trips"
            :key="trip.id"
            v-bind:to="'/trips/' + trip.id"
            exact>
            <show-trip :trip="trip" :trips="trips" :triplists="triplists" :triplistitems="triplistitems" :tripdays="tripdays"></show-trip>
        </router-link>

        <div v-if="trips.length == 0">
            <p>No Trips Have Been Created</p>
        </div>

    </div>
</template>

<script>
import ShowTrip from '@/components/ShowTrip.vue';
import { axios } from '@/common/app.js';

export default {
    name: '',
    components: {
        'show-trip': ShowTrip,
    },
    props:['triplists','triplistitems','tripdays'],
    data: function () {
        return {
            trips: []
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        deleteTrip(id) {
            axios.delete('/trip/' + id).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$store.dispatch('fetchTrips');
                    this.$router.push({ path: '/' });
                }
            });
        },
        loadTrips() {
            if (this.user) {
                // trip is a auth-protected resource
                // only return trips belonging to the user

                axios.get('trip').then((response) => {
                    this.trips = response.data.trip;
                });
            }
        }
    },
    watch: {
        user() {
            this.loadTrips();
        },
    },
    mounted() {
        this.loadTrips();
    },
};
</script>

<style scoped>
</style>