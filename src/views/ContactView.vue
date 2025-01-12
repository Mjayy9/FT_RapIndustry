<template>
  <h1 class="titles d-flex justify-center">CONTACT US!</h1>

  <v-container class="d-flex h-full w-48 justify-center">
    <v-card>
      <v-card-title class="titles font-weight-bold">You can contact us!</v-card-title>
      <v-card-text>Email: marian.sebora9@gmail.com</v-card-text>
      <v-card-text>Phone Number: +421 917 174 059</v-card-text>
    </v-card>
  </v-container>
  <Formular></Formular>
</template>

<script>
import Formular from "@/components/Formular.vue";

export default {
  components: { Formular }
}
</script>