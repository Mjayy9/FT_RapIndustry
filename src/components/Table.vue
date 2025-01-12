<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-center titles">Top Rappers and Producers in USA</h2>
        <v-data-table :headers="tableHeaders" :items="rappersData" class="elevation-1 font-weight-bold" dense style="text-align: center; border-radius: 8px;" striped></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RappersAndProducersView",
  data() {
    return {
      tableHeaders: [
        { text: '#', value: 'id' },
        { text: 'Rappers', value: 'rappers' },
        { text: 'Albums', value: 'albums' },
        { text: 'Num.', value: 'num' },
      ],
      rappersData: [
        { id: '#', rappers: 'Rappers', albums: 'Albums', num: 'Num.'},
        { id: 1, rappers: 'Travis Scott', albums: 'Rodeo; Birds In The Trap Sing McKnight; Huncho Jack, Jack Huncho; ASTROWORLD; JACKBOYS; Utopia', num: 6 },
        { id: 2, rappers: 'Drake', albums: 'Views; More Life; Scorpion; Care Package; Dark Lane Demo Tapes; Certified Lover Boy; Honestly, Nevermind; Her Loss; For All The Dogs; For All The Dogs Scary Hours Edition', num: 10 },
        { id: 3, rappers: 'Don Toliver', albums: 'Donny Womack; Heaven Or Hell; Life of a Don; Love Sick; Love Sick (Deluxe)', num: 5 },
        { id: 4, rappers: '21 Savage', albums: 'The Slaughter Tape; Slaughter King; Savage Mode; 21 Gang; Issa Album; Without Warning; i am > i was; i am > i was (Deluxe); SAVAGE MODE II', num: 9 },
        { id: 5, rappers: 'Future', albums: '56 Nights; DS2 (Deluxe); FUTURE; SUPER SLIMEY; Future & Juice WRLD Present... WRLD ON DRUGS; High Off Life; Pluto x Baby Pluto; Pluto x Baby Pluto (Deluxe); I NEVER LIKED YOU', num: 9 },
        { id: 6, rappers: 'Nardo Wick', albums: 'Who Is Nardo Wick??; Who Is Nardo Wick?? (Deluxe)', num: 2 },
        { id: 7, rappers: 'Lil Durk', albums: 'The Voice; The Voice (Deluxe); The Voice of the Heroes; 7220; 7220 (Reloaded); 7220 (Deluxe); Lil Durk Presents: Loyal Bros 2; Almost Healed; Nightmares In the Trenches', num: 9 },
        { id: 8, rappers: 'Young Thug', albums: 'So Much Fun; So Much Fun (Deluxe); Slime & B; Slime Language 2; Slime Language 2 (Deluxe); Punk; BUSINESS IS BUSINESS; BUSINESS IS BUSINESS (Metro\'s Version)', num: 8 },
        { id: 9, rappers: 'Playboi Carti', albums: 'In Abundance; Playboi Carti; Die Lit; Whole Lotta Red', num: 4 },
        { id: 10, rappers: 'Pop Smoke', albums: 'Meet The Woo; Meet The Woo (Deluxe Version); Meet The Woo 2; Meet The Woo 2 (Deluxe); Shoot For The Stars Aim For The Moon; Shoot For The Stars Aim For The Moon (Deluxe); Faith; Faith (Deluxe)', num: 8 },
        { id: '#', albums: 'Producers' },
        { id: 1, albums: 'Metro Boomin' },
        { id: 2, albums: 'Southside' },
        { id: 3, albums: '808 Mafia Boss' },
        { id: 4, albums: 'Tay Keith' },
        { id: 5, albums: 'Take A Day Trip' },
        { id: 6, albums: '808 Melo' },
        { id: 7, albums: 'Pierre Bourne' },
        { id: 8, albums: 'BNYX' },
        { id: 9, albums: 'ATL Jacob' },
        { id: 10, albums: 'AXL Beats' }
      ],
    };
  },
})
</script>
