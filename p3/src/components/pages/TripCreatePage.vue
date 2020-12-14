<template>
    <div>
        <h2>Add a Trip</h2>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" data-test="trip-name-input" v-model="trip.name" v-on:blur="validate()" id="name" min="2" max="100" required/>
            <small class="form-help">Min: 2, Max: 100</small>
            <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>

            <label for="name">Description</label>
            <input type="text" 
            data-test="trip-description-input"
            v-model="trip.description" id="description" max="100" v-on:blur="validate()"/>
            <error-field v-if="errors && 'description' in errors" :errors="errors.description"></error-field>

            <label for="name">Origin</label>
            <input type="text" 
            data-test="trip-origin-input"
            v-model="trip.origin" id="origin" max="100" v-on:blur="validate()"/>

            <label for="name">Destination</label>
            <input type="text" 
            data-test="trip-destination-input"
            v-model="trip.destination" id="destination" max="100" v-on:blur="validate()"/>

            <label for="name">Departure Details</label>
            <input type="text" 
            data-test="trip-departing-travel-input"
            v-model="trip.departing_travel" id="departing_travel" max="100" v-on:blur="validate()"/>
            <error-field v-if="errors && 'departure_travel' in errors" :errors="errors.departure_travel"></error-field>

            <label for="name">Returning Travel Details</label>
            <input type="text" 
            data-test="trip-returning-travel-input"
            v-model="trip.returning_travel" id="returning_travel" max="100" v-on:blur="validate()"/>

            <label for="name">Budget</label>
            <input type="text" 
            data-test="trip-budget-input"
            v-model="trip.budget" id="budget" max="100" v-on:blur="validate()"/>
            <error-field v-if="errors && 'budget' in errors" :errors="errors.budget"></error-field>

            <label for="name">Hotel</label>
            <input type="text" 
            data-test="trip-hotel-input"
            v-model="trip.hotel" id="hotel" max="100" v-on:blur="validate()"/>
        </div>

        <button @click="addTrip" data-test="add-trip-button">Add Trip</button>

        <transition name="fade">
            <div
                data-test="trip-added-confirmation"
                class="alert"
                v-if="showConfirmationMessage"
            >
                Trip was added!
            </div>
        </transition>

        <!--<p v-if="showConfirmationMessage">Trip was added</p>-->

        <!--<p v-if="errors">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </p>-->
        <div class="form-feedback-error" v-if="errors">Please correct the above errors</div>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    components: {
        'error-field': ErrorField
    },
    props: ['trips'],
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            trip: {
            }
        };
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
        addTrip() {
            axios.post('/trip', this.trip).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                        /*this.showConfirmationMessage = false;*/
                } else {
                    this.$store.dispatch('fetchTrips');
                    /*this.$router.push({ path: '/' });*/
                    this.showConfirmationMessage = true;

                    setTimeout(
                        () => (this.showConfirmationMessage = false),
                            3000
                    );
                    /*this.$emit('update-trips');*/
                    for (var key in this.trip) {
                        this.trip[key] = '';
                    }

                }
            });
        },
    }
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>