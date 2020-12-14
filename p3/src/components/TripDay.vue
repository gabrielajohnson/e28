<template>
<div>

    <input type="text" placeholder="Date" v-model="i.date" id="date" max="100" v-on:keyup="editDay(i)" data-test="trip-day-date"/>
    <error-field v-if="errors && 'date' in errors" :errors="errors.date"></error-field>

    <input type="text" placeholder="Description" v-model="i.description" id="description" max="100"  v-on:keyup="editDay(i)" data-test="trip-day-description"/>
    <error-field v-if="errors && 'description' in errors" :errors="errors.description"></error-field>

    <button class="small-btn delete" v-on:click="deleteDay(i)">Delete</button>

    <div class="form-feedback-error" v-if="errors">Please correct the above errors</div>


</div>


</template>

<script>
import { axios } from '@/common/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    name: 'trip-day',
    components: {
        'error-field': ErrorField
    },
    props: ['trip','includeDetails','tripdays',"i"],
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
    methods: {
        validate() {
            let validator = new Validator(this.tripday, {
                date: 'between:1,100',
                description: 'between:3,100',
            });
            this.errors = validator.errors.all();

            return validator.passes();
        },
        editDay(i) {
            axios.put('/tripday/' + i.id, i).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-trips-days');
                }
            });
        },
        deleteDay(day) {
            axios.delete('/tripday/' + day.id).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-trip-days');
                }
            });
        },
    }

};
</script>
