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
    /*props: ['trips','triplists','triplistitems','tripdays'],*/
    props:['triplists','triplistitems','tripdays'],
    data: function () {
        return {
            trips: []
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }/*,
        trips() {
            return this.$store.state.trips;
        }*/
    },
    methods: {
        loadTrips() {
            if (this.user) {
                // Because trip is a auth-protected resource, this will
                // only return trips belonging to the authenticated user

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