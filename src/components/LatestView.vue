<template>
    <div class="latest">
        <br>
        <h1>Latest</h1>

        <div class="row">

            <div class="col-md-3" v-for="product in products" :key="product">
                <br>
                <div class="card" onclick="alert(product.name)">
                    <img :src="product.image" alt="">
                    <div class="card-body">
                        <p>The fresh subtle mind with great technique</p>
                        <span>{{ product.price }} /-pkr</span>
                        &nbsp;
                        <a class="btn btn-secondary">Add to cart</a>
                    </div>
                </div>
            </div>

        </div>

        <br>
        <a href="#" id="view_all" class="btn btn-primary">View All</a>
        <br>
        <br>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LatestView',
    data(){return {
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
})

</script>