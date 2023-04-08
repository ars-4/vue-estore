import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$baseURL = 'https://django-estore.up.railway.app';

app.config.globalProperties.$user = {
    isLoggedIn: false,
    token: '',
    role: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    phone: ''
}

app.config.globalProperties.$cart_items = [];
app.config.globalProperties.$add_to_cart = function (product_id: number, product_title: string, product_price: number) {
    if (this.$cart_items.length === 0) {
        const product_quantity = 1;
        this.$cart_items.push([product_id.toString(), product_quantity.toString(), product_title, product_price.toString()])
    }
    else {
        let product_quantity = 1;
        for (let i = 0; i < this.$cart_items.length; i++) {
            if (Number(this.$cart_items[i][0]) === product_id) {
                product_quantity = Number(product_quantity) + Number(this.$cart_items[i][1])
                this.$cart_items.splice(i, 1);
                break;
            }
        }
        this.$cart_items.push([product_id.toString(), product_quantity.toString(), product_title, product_price.toString()])
    }
}

app.config.globalProperties.$remove_from_cart = async function(product_id: number) {
    for (let i = 0; i < this.$cart_items.length; i++) {
        if (Number(this.$cart_items[i][0]) === product_id) {
            this.$cart_items.splice(i, 1);
            break;
        }
    }
    this.$router.go(0);
}

app.use(router)
app.mount('#app')
