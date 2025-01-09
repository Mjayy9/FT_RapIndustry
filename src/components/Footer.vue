<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <v-footer class="footer opacity-80 pt-0 pb-0 d-flex align-center" app>
    <v-container class="pt-0 pb-0">
      <p class="d-flex"> © 2025 </p>
    </v-container>
    <v-container class="pt-0 pb-0">
      <p class="d-flex justify-center"> Producer name Majkyyy </p>
    </v-container>
    <v-container class="pt-0 pb-0">
      <p class="d-flex justify-end"> Vytvoril: Marián Šebora </p>
    </v-container>
  </v-footer>

</template>

<style scoped>

</style>