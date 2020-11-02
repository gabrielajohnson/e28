<!-- src/components/ShowProduct.vue -->
<template>
    <div class="product">
        <div class="product-name">{{ product.name }}</div>
        <img
            class="product-thumb"
            :src="require('@/assets/images/products/' + product.id + '.jpg')"
        />
        <!--<p class="product-description">{{ product.description }}</p>-->
        <!--<div class="product-price">${{ product.price }}</div>-->
        <!--<router-link v-bind:id="product.id" :to="{ path: '/products/'+ id}" exact>Read more</router-link>-->
        {{product.id}}


        <!--<div class="product-price">${{ product.price }}</div>-->
        <a v-bind:id="product.id" href = "'products'+"

        <!--<router-link :id="product.id"
            v-bind:to="id"
            exact
        >View Product</router-link>-->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	name: 'show-product',
	props: ['product'],
	data: function (){
		return {};
	},
};

</script>

<style scoped>
</style>