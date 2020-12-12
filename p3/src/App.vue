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
import { axios } from '@/common/app.js';

export default {
    name: 'App',
    data() {
        return {
            triplists: [],
            triplistitems: [],
            tripdays: [],
            /* Store links in an array to maintain order */
            links: ['trips', 'add a trip','account','register'],

            /* Map links to the appropriate component */
            paths: {
                trips: '/',
                'add a trip': '/trips/new',
                'account': '/account',
                'register': '/register'
            },
        };
    },
    methods: {
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
        this.$store.dispatch('fetchTrips');
        /*this.$store.dispatch('authUser');*/
        this.updateTripLists();
        this.updateTripListItems();
        this.updateTripDays();
    },
    computed: {
        trips() {
            return this.$store.state.trips;
        }
    }
};
</script>

<style lang='scss'>
@import '@/assets/scss/traveltea.scss';
</style>
