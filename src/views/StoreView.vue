<template>
  <h1 class="titles d-flex justify-center"> Beats Store </h1>
  <p class="d-flex justify-center font-weight-bold">On this page you can purchase beats!</p>

  <v-container class="d-flex h-full w-48 justify-center">
    <v-card>
      <v-card-title class="titles font-weight-bold"> Majkyyy Beats </v-card-title>
      <v-card-text> This store contains 10 beats which I produced. You can buy of them (or all) if you want! </v-card-text>
      <v-card-text> You can also dm my Instagram or join my Telegram Group where I post undone or unfinished beats and things around my life with music. </v-card-text>
      <v-btn href="https://t.me/+VQYN_8YpBXU0ZTY0" target="_blank" rel="noopener noreferrer" class="text-decoration-none ml-3 font-weight-bold" color="primary" outlined>
        <v-icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.62 19.08L10.9 14.92L16.74 19.5C17.21 19.86 17.62 19.68 17.76 19.14L21.85 4.39C22.04 3.71 21.63 3.4 21.1 3.54L2.74 9.02C2.09 9.21 2.09 9.57 2.6 9.73L7.35 11.18L17.38 5.66C17.72 5.48 18.03 5.58 17.77 5.77" />
          </svg>
        </v-icon>
        Telegram Private Channel
      </v-btn>
      <v-btn href="https://www.instagram.com/majkyy___/" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-instagram" class="text-decoration-none ml-3 font-weight-bold" color="pink" outlined> Instagram </v-btn>
      <v-img src="studio.jpg" class="workspaces d-flex align-center justify-center elevation-24" style="max-width: 400px; border-radius: 15px; margin: 10px auto auto;"></v-img>
      <v-card-subtitle class="font-weight-bold d-flex justify-center"> Studio </v-card-subtitle>
    </v-card>
  </v-container>

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
      ] as Beat[], // Explicitly specify the type here
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
        id: beat.title, // Identifikátor produktu
        name: beat.title, // Názov produktu
        price: parseFloat(beat.details.find(detail => detail.title === "Price")?.description || "0"), // Cena produktu
      });
    },
  },
});
</script>

