<template>
  <v-card>
    <v-card-title>
      <span class="headline">Login</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        
          <form @submit.prevent="login">
            <v-text-field v-model="user.username" label="Name" required></v-text-field>

            <v-text-field v-model="user.password" label="E-mail" required></v-text-field>

            <v-row>
            <v-col>
              <v-btn type="submit" color="blue darken-1" text>Confirm</v-btn>
            </v-col>

            <v-spacer></v-spacer>

            <v-col>
              <v-btn @click.prevent="getMembers" color="blue darken-1" text>Signin</v-btn>
            </v-col>
          </v-row>
          </form>
      
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "new1@gmail.com",
        password: "123",
      },
    };
  },
  methods: {
    login: function () {
      this.$store
        .dispatch("auth/login", this.user)
        .then(() => {
          //this.$router.push('/')
        })
        .catch((err) => console.log(err));
    },

    getMembers: function () {
      this.$store.dispatch("auth/getMembers");
    },
  },
};
</script>