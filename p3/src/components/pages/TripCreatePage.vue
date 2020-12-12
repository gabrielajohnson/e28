<template>
    <div>
        <h2>Add a Trip</h2>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="trip.name" id="name" min="3" max="100" required/>

            <label for="name">Description</label>
            <input type="text" v-model="trip.description" id="description" max="100" />

            <label for="name">Origin</label>
            <input type="text" v-model="trip.origin" id="origin" max="100" />

            <label for="name">Destination</label>
            <input type="text" v-model="trip.destination" id="destination" max="100"/>

            <label for="name">Departure Details</label>
            <input type="text" v-model="trip.departing_travel" id="departing_travel" max="100"/>

            <label for="name">Returning Travel Details</label>
            <input type="text" v-model="trip.returning_travel" id="returning_travel" max="100"/>

            <label for="name">Budget</label>
            <input type="text" v-model="trip.budget" id="budget" max="100"/>

            <label for="name">Hotel</label>
            <input type="text" v-model="trip.hotel" id="hotel" max="100"/>
        </div>

        <button @click="addTrip">Add Trip</button>

        <p v-if="showConfirmationMessage">Trip was added</p>

        <p v-if="errors">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </p>
    </div>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
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
        addTrip() {
            console.log(this.trip)
            axios.post('/trip', this.trip).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmationMessage = false;
                } else {
                    this.$store.dispatch('fetchTrips');
                    /*this.$emit('update-trips');*/
                    for (var key in this.trip) {
                        this.trip[key] = '';
                    }
                    this.showConfirmationMessage = true;
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