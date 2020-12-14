<template>
    <div>
        <h3 class="text-align-center">Lists</h3>
        <div class="add-list-container">
            <input type="text" v-model="triplist.name" id="name" max="100" placeholder = "Enter new list name" data-test="trip-list-name-input" v-on:blur="validateList()"/>
            <button class="btn add-list" v-on:click="addList" data-test="trip-add-list">Add List</button>
        </div>

         <div class = "trip-lists"> 
          <div class = "trip-list" v-for="(list,index) in currentTripListItems" :key="index">
            <div class="trip-heading">
                <p data-test="trip-list-header">{{ list.name }}</p>
                <button class="small-btn" v-on:click="deleteList(list.id)">Delete List</button>
            </div>
            <ul>
                <li v-for="(listitem,itemindex) in currentTripListItems[index].items" :key="itemindex">
                    <p data-test="trip-list-item">{{listitem.name}}</p>
                    <button class="small-btn" v-on:click="deleteListItem(listitem.id)">X</button>
                </li>

            </ul>
            <div class = "add-new-item">
                <input type="text" max="100" :id="nameId(list.id)" :key="list.id" placeholder="Add a new list item" data-test="add-new-list-item-input"/>
                <button class="small-btn" v-on:click="addListItem(list.id)" v-on:blur="validateListItem()" data-test="add-new-list-item">+</button>
                </div>
          </div>
        </div>
        <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>

    </div>
</template>

<script>
import { axios } from '@/common/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    name: 'show-trip-list',
    components: {
        'error-field': ErrorField
    },
    props: ['id','trip','triplists','triplistitems','tripdays'],
    data: function () {
        return {
            errors: null,
            triplist: {
                name: '',
                trip_id: this.trip.id
            },
            showConfirmationMessage: false,
            triplistitem: {
                name: '',
                trip_id: this.trip.id,
                triplist_id: ''
            }
        };
    },
    methods: {
        validateList() {
            let validator = new Validator(this.triplist, {
                name: 'required|between:1,100',
            });

            this.errors = validator.errors.all();

            return validator.passes();
        },
        validateListItem() {
            let validator = new Validator(this.triplistitem, {
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
                    this.$emit('update-trip-lists');
                }

            });

            this.triplist.name = '';
        },
        deleteList(listId) {

            axios.delete('/triplist/'+ listId).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-trip-lists');
                }

            });

            for(let listItem in this.triplistitems){
                if( listItem.trip_id == listId){
                    this.deleteListItem(listItem.id);
                }
            }

            this.$emit('update-trip-list-items');

        },
        addListItem(listId) {
            let nameId = "name" + listId;
            this.triplistitem.name = document.getElementById(nameId).value;
            this.triplistitem.triplist_id = listId;
            
            axios.post('/triplistitem', this.triplistitem).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-trip-list-items');
                    document.getElementById(nameId).value = '';
                }

            });
        },
        deleteListItem(listId) {

            axios.delete('/triplistitem/'+ listId).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-trip-list-items');
                }

            });

        },
        nameId: function (id) {
            return "name" + id;
        }
    },
    computed: {
        currentTripListItems() {
            function FilterList(listing) {
                return listing.trip_id == this.trip.id;
            }

            let filteredList = this.triplists.filter(FilterList, this);
            let objectList = [];

            function FilterListItem(listing) {
                return listing.trip_id == this.trip.id;
            }
        
            let filteredItems = this.triplistitems.filter(FilterListItem, this);

            for(const x in filteredList){
                objectList.push({name: filteredList[x].name, id: filteredList[x].id, trip_id: filteredList[x].trip_id, items: []});
                for(const y in filteredItems){
                    if(filteredItems[y].triplist_id == filteredList[x].id){
                        objectList[objectList.length-1].items.push(filteredItems[y]);
                    }
                }
            }
            return objectList;


        },
        tripNotFound() {
            return this.trip == null;
        },
    },
};
</script>
