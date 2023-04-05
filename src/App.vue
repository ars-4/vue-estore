<template>
  <NavBar/>

  <router-view/>

  <br>
  
  <div class="footer">
    <span>Copyright (c) All Rights Reserved 2023</span>
  </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  
  components: {
    NavBar,
  },

});

</script>
