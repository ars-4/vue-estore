<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">THE BRAND</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Men's Wear
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Unstitched</a></li>
              <li><a class="dropdown-item" href="#">Stitched</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Modern Wear</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Modern
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">T-Shirts</a></li>
              <li><a class="dropdown-item" href="#">Jeans</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">3 piece suit</a></li>
            </ul>
          </li>
        </ul>
        <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
        <div class="d-flex">
          <router-link to="/profile" class="btn fa fa-user"></router-link>
          <router-link to="/cart" class="btn fa fa-shopping-cart"></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({

  name: 'NavBar',

});

</script>