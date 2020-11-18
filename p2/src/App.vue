<template>
    <div id="app">
        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                        >{{ link }}</router-link
                    >
                </li>
            </ul>
        </nav>
        <div class="content">
            <h3>Travel Tea</h3>

            <router-view
                v-bind:trips="trips"
                v-on:update-trips="updateTrips()"
                v-bind:triplists="triplists"
                v-on:update-trip-lists="updateTripLists()"
                v-bind:triplistitems="triplistitems"
                v-on:update-trip-list-items="updateTripListItems()"
                v-bind:tripdays="tripdays"
                v-on:update-trip-days="updateTripDays()"
            ></router-view>
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    name: 'App',
    data() {
        return {
            trips: [],
            triplists: [],
            triplistitems: [],
            tripdays: [],
            /* Store links in an array to maintain order */
            links: ['home','trips', 'add a trip'],

            /* Map links to the appropriate component */
            paths: {
                home: '/',
                trips: '/trips',
                'add a trip': '/trips/new'
            },
        };
    },
    methods: {
        updateTrips() {
            axios.get('trip').then((response) => {
                this.trips = response.data.trip;
            });
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
        updateTripDays() {
            axios.get('tripday').then((response) => {
                this.tripdays = response.data.tripday;
            });
        }
    },
    mounted() {
        this.updateTrips(); 
        this.updateTripLists();
        this.updateTripListItems();
        this.updateTripDays();
    },
};
</script>

<style lang='scss'>
@import '@/assets/scss/traveltea.scss';
</style>
