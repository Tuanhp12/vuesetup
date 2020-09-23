<template>
  <v-app class="grey lighten-4">
    <template v-if="true">
      <admin/>
    </template>
    <template v-else>
      <web/>
    </template>
    
  </v-app>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
import web from '@/views/web'
import admin from '@/views/admin'

export default {
  name: 'App',
  components: { web,admin },
  data: () => ({
    //
  }),
};
</script>
