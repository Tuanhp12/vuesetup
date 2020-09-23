<template>
  <nav>
    <v-card color="grey lighten-4" flat height="100px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-dialog max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Login
              <v-icon right>exit_to_app</v-icon>
            </v-btn>
          </template>

          <Login />
        </v-dialog>

        <v-btn text color="grey">
          <span>Sign out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <!-- <v-navigation-drawer v-model="drawer" class="indigo">
      <p>Test</p>
    </v-navigation-drawer>-->
  </nav>
</template>

<script>
import Login from "@/views/web/Login.vue";

export default {
  name: "navbar",
  components: {
    Login,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>