<template>
  <div class="d-flex justify-between">
    <v-container class="d-flex h-full w-48">
      <v-card class="w-full">
        <v-row>
          <v-col cols="8">
            <v-card-title class="titles">Rappers</v-card-title>
            <v-card-subtitle class="font-weight-bold">List of some rappers from Slovakia</v-card-subtitle>
            <v-list>
              <v-list-item v-for="(item, index) in rappersCzech" :key="index">
                <v-list-item-title class="font-weight-bold">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-img src="milion+ logo.jpeg" class="ableton mr-16 mb-8 elevation-24"></v-img>
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
              <v-list-item v-for="(item, index) in producersCzech" :key="index">
                <v-list-item-title class="font-weight-bold">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-img src="2dfcfe5a-32dd-4389-bbde-1249e512e231_car_4x3.png" class="ableton mr-16 mt-14 elevation-24"></v-img>
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
      rappersCzech: ["Yzomandias", "Nik Tendo", "Hard Rico", "Dollar Prync", "Viktor Sheen", "Calin"],
      producersCzech: ["Decky Beats", "DEMO24", "Nemo.wave"],
    };
  },
})
</script>