<template>
    <div>
        <h2>Add a Trip</h2>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="trip.name" id="name" min="3" max="100" required/>
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
import { axios } from '@/app.js';

export default {
    props: ['trips'],
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            trip: {
                name: 'London',
            }
        };
    },
    methods: {
        addTrip() {
            axios.post('/trip', this.trip).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmationMessage = false;
                } else {
                    this.$emit('update-trips');
                    for (var key in this.trip) {
                        this.trip[key] = '';
                    }
                    this.showConfirmationMessage = true;
                }
            });
        },
    },
    /*computed: {
        categoriesList() {
            let tempCategories = this.products.filter(function(product){
                if (product.categories == "" || product.categories == null) {
                    return false; // skip
                }
                return true;
            }).map((product) =>
                product.categories.split(',')
            );
            let mergedCategories = [].concat.apply([], tempCategories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
    },*/
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>