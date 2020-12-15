<template>
    <div style="width:100%;">
        <h3 class="text-align-center trip-name" data-test="trip-name">{{ trip.name }}</h3>
        <div v-if="includeDetails">
            <label for="name">Description</label>
            <input type="text" 
            data-test="trip-description-input"
            v-model="trip.description" id="description" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>
            <error-field v-if="errors && 'description' in errors" :errors="errors.description"></error-field>

            <label for="name">Origin</label>
            <input type="text" 
            data-test="trip-origin"
            v-model="trip.origin" id="origin" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>

            <label for="name">Destination</label>
            <input type="text" v-model="trip.destination" id="destination" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>

            <label for="name">Departure Details</label>
            <input type="text" v-model="trip.departing_travel" id="departing_travel" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>

            <label for="name">Returning Travel Details</label>
            <input type="text" v-model="trip.returning_travel" id="returning_travel" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>

            <label for="name">Budget</label>
            <input type="text" data-test="trip-budget" v-model="trip.budget" id="budget" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>
            <error-field v-if="errors && 'budget' in errors" :errors="errors.budget"></error-field>

            <label for="name">Hotel</label>
            <input type="text" v-model="trip.hotel" id="hotel" max="100" v-on:keyup="editTrip" v-on:blur="validate()"/>

            <h3 class = "text-align-center">Trip Schedule</h3>
            <div class="calendar">
                <div class = "trip-day" v-for="(i, index) in currentTripDays" :value="index" :key="index">
                    <trip-day :trip="trip" :i="i" v-on:update-trip-days="updateTripDays()"></trip-day>
                </div>
            </div>

            <button class="btn" @click="addDay" data-test="trip-add-day">Add Date</button>

            <div class="form-feedback-error" v-if="errors">Please correct the above errors</div>

            <h3 class="text-align-center">Lists</h3>
            <div class="add-list-container">
                <input type="text" v-model="triplist.name" id="name" max="100" placeholder = "Enter new list name" data-test="trip-list-name-input" v-on:blur="validateList()"/>
                <button class="btn add-list" v-on:click="addList" data-test="trip-add-list">Add List</button>
            </div>

            <show-trip-list :trip="trip" :triplists="triplists" :triplistitems="triplistitems" 
            v-on:update-trip-lists="updateTripLists()"
            v-on:update-trip-list-items="updateTripListItems()"></show-trip-list>
            <button @click="deleteTrip(trip.id)">Delete Trip</button>

        </div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
import TripDay from '@/components/TripDay.vue';
import ShowTripList from '@/components/ShowTripList.vue';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    name: 'show-trip',
    props: ['trip','trips','includeDetails','tripdays','triplists','triplistitems'],
    data() {
        return{
            errors: null,
            showConfirmationMessage: false,
            tripday: {
                date: '',
                description: '',
                trip_id: this.trip.id
            },
            triplist:{
                name: '',
                trip_id: this.trip.id
            },
        };
    },
    components: {
        'error-field': ErrorField,
        'trip-day': TripDay,
        'show-trip-list': ShowTripList
    },
    methods: {
        validate() {
            let validator = new Validator(this.trip, {
                name: 'required|between:1,100',
                description: 'between:3,100',
                budget: 'numeric'
            });
            this.errors = validator.errors.all();

            return validator.passes();
        },
        validateList() {
            let validator = new Validator(this.triplist, {
                name: 'required|between:1,100',
            });

            this.errors = validator.errors.all();

            return validator.passes();
        },
        addList() {
            axios.post('/triplist', this.triplist).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$store.dispatch('fetchTripLists');
                }

            });

            this.triplist.name = '';
        },
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
        deleteTrip(id) {
            axios.delete('/trip/' + id).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$store.dispatch('fetchTrips');
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
        /* Get days for current trip */
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
