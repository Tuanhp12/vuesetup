<template>
  <v-card>
    <v-card-title>
      <span class="headline">Admin Login</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        
          <form @submit.prevent="login">
            <v-text-field v-model="user.username" label="Name" required></v-text-field>

            <v-text-field v-model="user.password" label="E-mail" required></v-text-field>

            <v-btn type="submit" color="blue darken-1" text>Login</v-btn>
            <v-btn @click.prevent="getMembers" color="blue darken-1" text>Signin</v-btn>
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
        username: "test2@gmail.com",
        password: "123",
      },
    };
  },
  methods: {
    login: function () {
      this.$store
        .dispatch("auth/login", this.user)
        .then(() => {
          const status =  this.$store.state.auth.user
            if(status === null || status === undefined) {
                 this.$router.push('/admin/login');
            }else if (status.role === 'ADMIN') {
               this.$router.push('/admin/layout');
            }else {
               this.$router.push('/');
            }
          
        })
        .catch((err) => console.log(err));
         
    },

    getMembers: function () {
      this.$store.dispatch("auth/getMembers");
    },
  },
};
</script>