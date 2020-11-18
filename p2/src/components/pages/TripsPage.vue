<template>
    <div id="trips">
        <h1>Trips</h1>

        <router-link
            v-for="trip in trips"
            :key="trip.id"
            v-bind:to="'/trips/' + trip.id"
            exact>
            <show-trip :trip="trip" :triplists="triplists" :triplistitems="triplistitems" :tripdays="tripdays"></show-trip>
        </router-link>

        <div v-if="trips.length == 0">
            <p>No Trips Have Been Created</p>
        </div>

    </div>
</template>

<script>
import ShowTrip from '@/components/ShowTrip.vue';

export default {
    name: '',
    components: {
        'show-trip': ShowTrip,
    },
    props: ['trips','triplists','triplistitems','tripdays'],
    data: function () {
        return {};
    },
};
</script>

<style scoped>
</style>