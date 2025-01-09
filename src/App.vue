<template>
  <v-app>
    <v-main>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <router-view :key="$route.fullPath"></router-view>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, NavigationBar, Footer },
}
</script>