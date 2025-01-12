<template>
  <v-container v-for="(beat, index) in beatDetails" :key="index" class="d-flex h-full justify-center">
    <v-card class="w-75">
      <v-card-title class="titles font-weight-bold">{{ beat.title }}</v-card-title>
      <v-card-subtitle class="font-weight-bold d-flex">Beat Details</v-card-subtitle>
      <v-container class="d-flex px-0">
        <v-expansion-panels class="custom-panel mb-2">
          <v-expansion-panel v-for="(detail, id) in beat.details" :key="id" :title="detail.title" :text="detail.description" bg-color="#ff004d" class="font-weight-bold"></v-expansion-panel>
        </v-expansion-panels>
      </v-container>
      <v-row class="d-flex mb-4 ml-4">
        <v-btn @click="playAudio(beat.audioUrl)" :ripple="true" elevation="24" rounded="lg" color="#ff004d" class="mx-2">PLAY TRACK</v-btn>
        <v-btn @click="stopAudio" color="#ff6a00" :ripple="true" elevation="24" rounded="lg" class="mx-2">STOP TRACK</v-btn>
        <v-btn :ripple="true" class="mx-2" color="green" elevation="24" rounded="lg" @click="addToCart(beat)">ADD TO CART</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/counter.ts';
import router from "@/router";

interface BeatDetail {
  title: string;
  description: string;
}

interface Beat {
  title: string;
  audioUrl: string;
  details: BeatDetail[];
}

export default defineComponent({
  name: "Store",
  data() {
    return {
      currentAudio: null as HTMLAudioElement | null,
      beatDetails: [
        {
          title: "PARANOIA BEAT",
          audioUrl: "/public/audio/PARANOIA Beat 156bpm Dmin prod.by majkyyy.wav",
          details: [
            { title: "BPM", description: "156 bpm" },
            { title: "Scale", description: "D Minor Scale" },
            { title: "Price", description: "100" },
          ],
        },
        {
          title: "KTO SOM!? BEAT",
          audioUrl: "/public/audio/melodka_reverse.wav",
          details: [
            { title: "BPM", description: "160 bpm" },
            { title: "Scale", description: "C# Minor Scale" },
            { title: "Price", description: "100" },
          ],
        },
        {
          title: "AROUND ME BEAT",
          audioUrl: "/public/audio/around me 123bpm Dmin.mp3",
          details: [
            { title: "BPM", description: "123 bpm" },
            { title: "Scale", description: "D Minor Scale" },
            { title: "Price", description: "50" },
          ],
        },
        {
          title: "NNTBA BEAT",
          audioUrl: "/public/audio/NNTBA 87bpm Amin.mp3",
          details: [
            { title: "BPM", description: "87 bpm" },
            { title: "Scale", description: "A Minor Scale" },
            { title: "Price", description: "80" },
          ],
        },
        {
          title: "TOGETHER BEAT",
          audioUrl: "/public/audio/together 160bpm Cmin.mp3",
          details: [
            { title: "BPM", description: "160 bpm" },
            { title: "Scale", description: "C Minor Scale" },
            { title: "Price", description: "60" },
          ],
        },
        {
          title: "ESSENCE BEAT",
          audioUrl: "/public/audio/essence.mp3",
          details: [
            { title: "BPM", description: "152 bpm" },
            { title: "Scale", description: "F# Minor Scale" },
            { title: "Price", description: "70" },
          ],
        },
        {
          title: "ONE LOVE BEAT",
          audioUrl: "/public/audio/One Love 130bpm Fmin.mp3",
          details: [
            { title: "BPM", description: "130 bpm" },
            { title: "Scale", description: "F Minor Scale" },
            { title: "Price", description: "80" },
          ],
        },
        {
          title: "FIVESIX BEAT",
          audioUrl: "/public/audio/FiveSix.mp3",
          details: [
            { title: "BPM", description: "154 bpm" },
            { title: "Scale", description: "D# Minor Scale" },
            { title: "Price", description: "100" },
          ],
        },
        {
          title: "PTSD BEAT",
          audioUrl: "/public/audio/ptsd.mp3",
          details: [
            { title: "BPM", description: "137 bpm" },
            { title: "Scale", description: "D# Minor Scale" },
            { title: "Price", description: "80" },
          ],
        },
        {
          title: "NONE LEFT BEAT",
          audioUrl: "/public/audio/None Left 170 bpm Dmin.wav",
          details: [
            { title: "BPM", description: "170 bpm" },
            { title: "Scale", description: "D Minor Scale" },
            { title: "Price", description: "70" },
          ],
        },
      ] as Beat[],
    };
  },
  methods: {
    playAudio(audioSrc: string) {
      if (this.currentAudio) {
        this.currentAudio.pause();
      }
      this.currentAudio = new Audio(audioSrc);
      this.currentAudio.play();
    },
    stopAudio() {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }
    },
    addToCart(beat: Beat) {
      const cartStore = useCartStore();
      router.push("/cart");
      cartStore.addToCart({
        id: beat.title,
        name: beat.title,
        price: parseFloat(beat.details.find(detail => detail.title === "Price")?.description || "0"),
      });
    },
  },
});
</script>