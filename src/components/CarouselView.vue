<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img :src="images[0]" class="d-block w-100" alt="">
                <div class="carousel-caption">
                    <h1>Welcome to THE BRAND</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, omnis voluptates mollitia quasi
                        magnam in sapiente ut aspernatur, accusantium, cumque facere debitis? Nobis sit corporis, officia
                        aperiam esse quo delectus!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img :src="images[1]" class="d-block w-100" alt="">
                <div class="carousel-caption">
                    <h1>Welcome to THE BRAND</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, omnis voluptates mollitia quasi
                        magnam in sapiente ut aspernatur, accusantium, cumque facere debitis? Nobis sit corporis, officia
                        aperiam esse quo delectus!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img :src="images[2]" class="d-block w-100" alt="">
                <div class="carousel-caption">
                    <h1>Welcome to THE BRAND</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, omnis voluptates mollitia quasi
                        magnam in sapiente ut aspernatur, accusantium, cumque facere debitis? Nobis sit corporis, officia
                        aperiam esse quo delectus!</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CarouselView',

    data() {
        return {
            images: [
                "https://drscdn.500px.org/photo/124332697/q%3D80_m%3D1500_k%3D1/v2?sig=190b78e2eb7168915ba479ae4960a981a83819d8542710986bec58c32a35f797",
                "https://drscdn.500px.org/photo/125940057/q%3D80_m%3D1500/v2?sig=5565aecf5655a423fc9d3517b8724040aa089b414eef063ada80aecd24ff85ff",
                "https://drscdn.500px.org/photo/279137385/q%3D80_m%3D1500/v2?sig=785257ba6f22daa87d5a907d646802425ca8e29d7d1010fb78d4c1f8478d5c73"
            ],
        }
    },
})

</script>