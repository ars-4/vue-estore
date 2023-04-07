<template>

    <div class="products">
        
        <h1>{{ $route.query.category || "Browsing All" }}</h1>

       <div class="row">

        <div class="col-md-3" v-for="prod in products" :key="prod">
            <div class="card">
                <img :src="prod.image" alt="">
                <div class="info text-light">
                    <h3>{{ prod.name }}</h3>
                    <p>{{ prod.price }}</p>
                    <button class="btn btn-primary" @click="product_page(prod.name)">View</button>
                    &nbsp;
                    <button class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>

       </div>

    </div>

</template>

<script>

import { defineComponent } from 'vue';
export default defineComponent({
    data(){return{
        products: [
            {
                "name": "Leather Jacket",
                "price": 8000,
                "image": "https://images.freeimages.com/variants/jFFn96boKUKE7jSrdVr4MWYh/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
            },
            {
                "name": "Leather Jacket",
                "price": 8000,
                "image": "https://images.freeimages.com/variants/jFFn96boKUKE7jSrdVr4MWYh/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
            },
            {
                "name": "Leather Jacket",
                "price": 8000,
                "image": "https://images.freeimages.com/variants/jFFn96boKUKE7jSrdVr4MWYh/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
            },
            {
                "name": "Leather Jacket",
                "price": 8000,
                "image": "https://images.freeimages.com/variants/jFFn96boKUKE7jSrdVr4MWYh/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
            },
            {
                "name": "Leather Jacket",
                "price": 8000,
                "image": "https://images.freeimages.com/variants/jFFn96boKUKE7jSrdVr4MWYh/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
            },
            {
                "name": "Leather Jacket",
                "price": 8000,
                "image": "https://images.freeimages.com/variants/jFFn96boKUKE7jSrdVr4MWYh/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
            },
        ]
    }},

    methods: {
        product_page(name){
            this.$router.push(`/product/?product_name=${name}`)
        }
    }
})

</script>