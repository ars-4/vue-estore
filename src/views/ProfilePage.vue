<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="profile" v-if="$user.isLoggedIn">
                <h1>Profile</h1>
                <button class="btn btn-primary" @click="logout">Logout</button>
            </div>

            <div class="auth" v-else>
                <h1>Authentication</h1>
                <div class="form">
                    <div class="login_form" v-if="login_form">
                        <input type="text" class="form-control" placeholder="Username" v-model="username">
                        <br>
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <br>
                        <button class="btn btn-primary" @click="login">Login</button>
                        &nbsp;
                        <button class="btn btn-primary" @click="show_register_form">Register</button>
                    </div>
                    <div class="register_form" v-else-if="register_form">
                        <input type="text" class="form-control" placeholder="Username" v-model="username">
                        <br>
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <br>
                        <input type="password" class="form-control" placeholder="Confirm Password" v-model="password">
                        <br>
                        <input type="text" class="form-control" placeholder="email">
                        <br>
                        <input type="text" class="form-control" placeholder="phone">
                        <br>
                        <input type="text" class="form-control" placeholder="address">
                        <br>
                        <input type="text" class="form-control" placeholder="city">
                        <br>
                        <input type="text" class="form-control" placeholder="state">
                        <br>
                        <input type="text" class="form-control" placeholder="zip">
                        <br>
                        <button class="btn btn-primary" @click="register">Register</button>
                        &nbsp;
                        <button class="btn btn-primary" @click="show_login_form">Login</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProfilePage',

    data() {
        return {
            login_form: true,
            register_form: false,
            username: '',
            password: ''
        };
    },

    methods: {
        show_login_form() {
            this.login_form = true;
            this.register_form = false;
        },
        show_register_form() {
            this.login_form = false;
            this.register_form = true;
        },
        login() {
            this.$user.isLoggedIn = true;
            this.$router.push('/')
        },
        logout() {
            this.$user.isLoggedIn = false;
            this.$router.push('/')
        },
    },

});

</script>