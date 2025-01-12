<template>
  <div class="d-flex justify-between">
    <v-container class="d-flex h-full w-48">
      <v-card class="w-full">
        <v-row>
          <v-col cols="8">
            <v-card-title class="titles">Rappers</v-card-title>
            <v-card-subtitle class="font-weight-bold">List of some rappers from Slovakia</v-card-subtitle>
            <v-list>
              <v-list-item v-for="(item, index) in rappersSlovakia" :key="index">
                <v-list-item-title class="font-weight-bold">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-img src="CNSFLT Logo.png" class="ableton mr-16 elevation-24"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-container class="d-flex h-full w-48">
      <v-card class="w-full">
        <v-row>
          <v-col cols="8">
            <v-card-title class="titles">Producers</v-card-title>
            <v-card-subtitle class="font-weight-bold">List of some producers from Slovakia</v-card-subtitle>
            <v-list>
              <v-list-item v-for="(item, index) in producersSlovakia" :key="index">
                <v-list-item-title class="font-weight-bold">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-img src="ECM Squad Logo.jpg" class="ableton mr-16 mt-14 elevation-24"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "RappersAndProducersView",
  data() {
    return {
      rappersSlovakia: ["Separ", "Luca Brassi10x", "Guapanova", "Shimmi", "AstralKid22", "RAYYY P", "Saul"],
      producersSlovakia: ["Konex", "Mjay Beatz", "Deadway", "Tristan Hoodrich", "SpecialBeatz", "ECM Squad"],
    };
  },
})
</script>
