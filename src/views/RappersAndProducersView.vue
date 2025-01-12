<template>
  <h1 class="titles d-flex justify-center"> Rappers And Producers (CZ/SK and USA) </h1>
  <RappersAndProducersSlovakia></RappersAndProducersSlovakia>
  <SlovakRapperCards></SlovakRapperCards>
  <RappersAndProducersCzech></RappersAndProducersCzech>
  <CzechRapperCards></CzechRapperCards>

  <h1 class="titles d-flex justify-center"> American Rappers and Producers </h1>
  <Table></Table>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SlovakRapperCards from "@/components/SlovakRapperCards.vue";
import CzechRapperCards from "@/components/CzechRapperCards.vue";
import RappersAndProducersSlovakia from "@/components/RappersAndProducersSlovakia.vue";
import RappersAndProducersCzech from "@/components/RappersAndProducersCzech.vue";
import Table from "@/components/Table.vue";

export default defineComponent({
  components: { SlovakRapperCards, CzechRapperCards, RappersAndProducersSlovakia, RappersAndProducersCzech, Table },
  name: "RappersAndProducersView",
})
</script>