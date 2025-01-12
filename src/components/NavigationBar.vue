<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavigationBar"
})
</script>

<template>
    <v-container class="navigationBar opacity-80">
      <v-app-bar>
        <v-tabs>
          <v-tab to="/home">Home</v-tab>
          <v-tab to="/programs">Programs</v-tab>
          <v-tab to="/rappers_and_producers">Rappers and Producers</v-tab>
          <v-tab to="/store">Store</v-tab>
          <v-tab to="/cart">Cart</v-tab>
          <v-tab to="/contact">Contact</v-tab>
          <v-tab to="/about">About Me</v-tab>
        </v-tabs>
      </v-app-bar>
    </v-container>
</template>
