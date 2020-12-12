<template>
<div>

    <input type="text" placeholder="Date" v-model="i.date" id="date" max="100" v-on:keyup="editDay(i)"/>
    <input type="text" placeholder="Description" v-model="i.description" id="description" max="100" v-on:keyup="editDay(i)"/>
    <button class="small-btn delete" v-on:click="deleteDay(i)">Delete</button>

</div>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
    name: 'trip-day',
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
        editDay(i) {
            axios.put('/tripday/' + i.id, i).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmationMessage = false;
                } else {
                    this.$emit('update-trips-days');
                    this.showConfirmationMessage = true;
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
