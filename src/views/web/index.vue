<template>
  <v-app class="grey lighten-4">
    <navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/views/web/Navbar.vue'

export default {
  name: 'Web',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
