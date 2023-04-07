<template>
    <div class="product">
        <div class="row">
            <div class="col-md-6">
                <div class="card image">
                    <img src="../../public/static/images/digital_painting_ultra_realistic_mountains.jpg" alt="">
                </div>
            </div>
            <div class="col-md-6">
                <h1>{{ $route.query.product_name }}</h1>
                <br>
                <div class="row">
                    <div class="col-md-2">
                        Type:
                    </div>
                    <div class="col-md-8">
                        Fabric
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        Color:
                    </div>
                    <div class="col-md-8">
                        White
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        Category:
                    </div>
                    <div class="col-md-8">
                        category_name, sub_category_name
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        Description:
                    </div>
                    <div class="col-md-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro natus ut veniam
                        doloremque minima ex quas tenetur perferendis repudiandae vitae ea dolore, asperiores voluptas
                        consectetur. Dolores, in. Veniam, possimus.
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-2">
                        Price:
                    </div>
                    <div class="col-md-8">
                        100$
                    </div>
                </div>
                <br>
                <button class="btn btn-primary add_to_cart">Add to cart</button>
                </div>
            </div>
        </div>
</template>