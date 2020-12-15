<template>
    <div id="trip-page">
        <div v-if="trip">
            <show-trip
                :trip="trip"
                :includeDetails="true"
                :triplists="triplists"
                :triplistitems="triplistitems"
                :tripdays="tripdays"
                v-on:update-trip-days="updateTripDays()"
            ></show-trip>
        </div>
        <div v-if="tripNotFound">
            <p>trip {{ id }} not found.</p>
        </div>
    </div>
</template>

<script>
import ShowTrip from '@/components/ShowTrip.vue';

export default {
    name: '',
    props: ['id','triplists','triplistitems','tripdays'],
    components: {
        'show-trip': ShowTrip,
    },
    data() {
        return {};
    },
    methods: {
        updateTripDays() {
            this.$emit('update-trip-days');
        }
    },
    computed: {
        trip() {
            return this.$store.getters.getTripById(this.id);
        },
        trips() {
            return this.$store.state.trips;
        },
        triplist() {
            return this.triplists.filter((triplist) => {
                return triplist.trip_id == this.trip.id;
            }, this.trip.id)[0];
        },
        tripday() {
            return this.tripdays.filter((tripday) => {
                return tripday.trip_id == this.trip.id;
            }, this.trip.id)[0];
        },
        triplistitem() {
            return this.triplistitem.filter((triplistitem) => {
                return triplistitem.trip_id == this.trip.id;
            }, this.trip.id)[0];
        },
        tripNotFound() {
            return this.trip == null;
        },
        user() {
            return this.$store.state.user;
        }
    },
};
</script>
