<template>
    <div>
        <h3 class="text-align-center trip-name">{{ trip.name }}</h3>

        <div v-if="includeDetails">
            <label for="name">Description</label>
            <input type="text" v-model="trip.description" id="description" max="100" v-on:keyup="editTrip"/>

            <label for="name">Origin</label>
            <input type="text" v-model="trip.origin" id="origin" max="100" v-on:keyup="editTrip"/>

            <label for="name">Destination</label>
            <input type="text" v-model="trip.destination" id="destination" max="100" v-on:keyup="editTrip"/>

            <label for="name">Departure Details</label>
            <input type="text" v-model="trip.departing_travel" id="departing_travel" max="100" v-on:keyup="editTrip"/>

            <label for="name">Returning Travel Details</label>
            <input type="text" v-model="trip.returning_travel" id="returning_travel" max="100" v-on:keyup="editTrip"/>

            <label for="name">Budget</label>
            <input type="text" v-model="trip.budget" id="budget" max="100" v-on:keyup="editTrip"/>

            <label for="name">Hotel</label>
            <input type="text" v-model="trip.hotel" id="hotel" max="100" v-on:keyup="editTrip"/>

            <h3 class = "text-align-center">Trip Schedule</h3>
            <div class="calendar">
                <div class = "trip-day" v-for="(i, index) in currentTripDays" :value="index" :key="index">
                    <trip-day :trip="trip" :i="i" v-on:update-trip-days="updateTripDays()"></trip-day>
                </div>
            </div>

            <button class="btn" @click="addDay">Add Date</button>

            <p v-if="errors">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>

            <show-trip-list :trip="trip" :triplists="triplists" :triplistitems="triplistitems" 
            v-on:update-trip-lists="updateTripLists()"
            v-on:update-trip-list-items="updateTripListItems()"></show-trip-list>


        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
import TripDay from '@/components/TripDay.vue';
import ShowTripList from '@/components/ShowTripList.vue';

export default {
    name: 'show-trip',
    props: ['trip','trips','includeDetails','tripdays','triplists','triplistitems'],
    data() {
        return{
            errors: null,
            tripday: {
                date: '',
                description: '',
                trip_id: this.trip.id
            },
        };
    },
    components: {
        'trip-day': TripDay,
        'show-trip-list': ShowTripList
    },
    methods: {
        editTrip() {
            axios.put('/trip/' + this.trip.id, this.trip).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmationMessage = false;
                } else {
                    this.$emit('update-trips');
                    this.showConfirmationMessage = true;
                }
            });
        },
        addDay() {
            axios.post('/tripday', this.tripday).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-trip-days');
                }

            });
        },
        updateTrips() {
            this.$emit('update-trips');
        },
        updateTripDays() {
            this.$emit('update-trip-days');
        },
        updateTripLists() {
            axios.get('triplist').then((response) => {
                this.triplists = response.data.triplist;
            });
        },
        updateTripListItems() {
            axios.get('triplistitem').then((response) => {
                this.triplistitems = response.data.triplistitem;
            });
        },
    },
    computed: {
        currentTripDays() {
            function filterById(day) {
                return day.trip_id == this.trip.id;
            }
        
            return this.tripdays.filter(filterById, this);

        },
        tripNotFound() {
            return this.trip == null;
        },
    }

};
</script>
