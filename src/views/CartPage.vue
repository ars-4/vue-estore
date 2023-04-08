<template>
    <div class="cart">
        <h1>Cart</h1>
        <div class="cart_items row">
            <div class="cart_item col-md-3" v-for="item in $cart_items" :key="item">
                <div class="cart_item_info">
                    <h3>{{ item[2] }}</h3>
                    <p>{{ item[3] }} x {{ item[1] }}</p>
                </div>
                <div class="cart_item_remove">
                    <button class="btn btn-primary" @click="remove_from_cart(Number(item[0]))">Remove</button>
                </div>
            </div>
        </div>
        <p v-if="$cart_items.length == 0">Your cart is empty</p>
        <div class="order" v-if="$user.isLoggedIn">
            <button class="btn btn-primary">Create Order</button>
            <div class="payment_method">
                <h2>Payment Method</h2>
                <div class="form-check">
                    <input class="form-check-input" checked type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cash On Delivery
                    </label>
                </div>
            </div>
        </div>
        <p v-else>Please <a href="/profile" class="text-primary">Login</a> to add an order</p>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            cart_items: []
        }
    },

    methods: {
        remove_from_cart(id) {
            for (let i = 0; i < this.cart_items.length; i++) {
                if (this.cart_items[i][0] == id) {
                    this.cart_items.splice(i, 1);
                    break;
                }
            }
            this.$forceUpdate();
        },
    },

    beforeMount() {
        this.cart_items = this.$cart_items;
    },

})

</script>