<template>
  <div class="home">
    
    <CarouselView/>

    <!-- Featured -->
    <FeaturedView/>

    <!-- Latest -->
    <LatestView/>

    <!-- NewsLetter -->
    <NewsLetter/>

  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CarouselView from '@/components/CarouselView.vue';
import FeaturedView from '@/components/FeaturedView.vue';
import LatestView from '@/components/LatestView.vue';
import NewsLetter from '@/components/NewsLetter.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    CarouselView,
    FeaturedView,
    LatestView,
    NewsLetter,
  },

  methods: {
    get_products() {
      console.log('get_products');
    }
  }

});

</script>
