<template>
    <div>
        <h1>Show Product ID# {{ id }}</h1>
        <p>{{product}}</p>
        <!--<div class="product-name">{{ product.name }}</div>
        <img
            class="product-thumb"
            :src="require('@/assets/images/products/' + product.id + '.jpg')"
        />
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">${{ product.price }}</div>-->
    </div>
</template>

<script>
import {products} from '@/products.js'

export default {
	name: '',
	props: ['id'],
    data: function () {
        return {
            products: products,
        };
    },
    computed: {
        product() {
        let productsArray = this.products;
			
			let product1 = productsArray.filter(function(productsArray) {return (productsArray['id'] == this.id);})[0];

			return product1;
        },
    }

};


</script>

<style>
</style>