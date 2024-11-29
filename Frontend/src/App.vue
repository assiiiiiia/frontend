<template>
  <v-app>
       <!-- Conditionally render Navbar and Footer based on the route -->
    <Navbar v-if="!isPrivateRoute" />
    
    <router-view />
    
    <Footer v-if="!isPrivateRoute" />

  </v-app>
  
</template>

<script>
import Footer from "./components/Footer.vue"
import Navbar from "./components/Navbar.vue"


export default {
  components: { Navbar, Footer },
  computed: {
    isPrivateRoute() {
      // Check if the current route is 'private'
      return this.$route.path === '/private-space';
    }
  },
  name: 'App',
};
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

v-footer {
  margin-top: auto; 
}
</style>
