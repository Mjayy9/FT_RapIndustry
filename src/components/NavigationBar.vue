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
          <v-tab to="/">Home</v-tab>
          <v-tab to="/">Programs</v-tab>
          <v-tab to="/">CZ/SK Rap</v-tab>
          <v-tab to="/">Store</v-tab>
          <v-tab to="/">Contact</v-tab>
        </v-tabs>
      </v-app-bar>
    </v-container>
</template>
