<template>
  <v-container v-for="(artist, index) in artistsSlovakia" :key="index" class="d-flex h-full justify-center">
    <v-card class="w-75">
      <v-card-title class="titles font-weight-bold">{{ artist.name }}</v-card-title>
      <v-btn :href="artist.musicProfileAppleMusic" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-apple" class="text-decoration-none ml-3 font-weight-bold" :color="artist.color_1" outlined> Apple Music Profile </v-btn>
      <v-btn :href="artist.musicProfileSpotify" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-spotify" class="text-decoration-none ml-3 font-weight-bold" :color="artist.color_2" outlined> Spotify Profile </v-btn>
      <v-card-text>{{ artist.description }}</v-card-text>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">{{ artist.name }} Albums/Tracks</v-card-subtitle>
      <v-container class="d-flex px-0">
        <v-expansion-panels class="custom-panel mb-2">
          <v-expansion-panel v-for="(album, index) in artist.albums" :key="index" :title="album.title" :text="album.producedBy" bg-color="#ff004d" class="font-weight-bold"></v-expansion-panel>
        </v-expansion-panels>
      </v-container>
      <v-img :src="artist.image" class="workspaces d-flex align-center justify-center elevation-24" style="max-width: 400px; border-radius: 15px; margin: 10px auto auto;"></v-img>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">{{ artist.name }} Photo</v-card-subtitle>
      <v-row class="d-flex mb-4 ml-4">
        <v-btn @click="playAudio(artist.audioUrl)" :ripple="true" elevation="24" rounded="lg" color="#ff004d" class="mx-2">PLAY TRACK</v-btn>
        <v-btn @click="stopAudio" color="#ff6a00" :ripple="true" elevation="24" rounded="lg" class="mx-2">STOP TRACK</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RappersAndProducersView",
  data() {
    return {
      currentAudio: null as HTMLAudioElement | null,
      artistsSlovakia: [
        {
          name: "Luca Brassi10x",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/luca-brassi10x/1510257533",
          musicProfileSpotify: "https://open.spotify.com/artist/33ngpBQcfq53FgLhpBDt8i",
          description: "Luka Mašulovič, known mainly by his artist name Luca Brassi, Luca Brssi or Luca Brassi10x, is a Slovak rapper born on 14 December 1994. He started his music career with a feat on Tisci's track \"LV Vačky\" in January 2020. A few months later, Luca releases his first single \"Deep Narco Shit\". In his career Luca Brassi managed to collaborate with people like Yzomandias, NikTendo, Dame, Konex, CA$HANOVA BULHAR, Pil C and many more. Luca Brassi10x is one of the rappers who should own the next few years. He is young, talented and knows how to impress. Besides, he is also considered \"his own\" by artists like Dame or Separ, so he seems to be working hard, otherwise such \"heavyweights\" of Slovak rap wouldn't have taken him in their midst. Last time he made his presence known on Nik Tenda's EP in the track tempo, where Cashanova Bulhar also appeared.",
          albums: [
            { title: "mamaididit", producedBy: "Produced by: Facefront x LUJA" },
            { title: "Mladý ale plný", producedBy: "Produced by: Tristan Hoodrich" },
            { title: "Album Ghetto Maradona", producedBy: "Produced by: tristan Hoodrich" }
          ],
          image: "IMG_6567.PNG",
          audioUrl: "/public/audio/Hore Dole - Luca Brassi10x.mp3",
          color_1: '#ff004d',
          color_2: 'green',
        },
        {
          name: "guapanova",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/guapanova/1457449860",
          musicProfileSpotify: "https://open.spotify.com/artist/3cKe8c7z8w2nyYsaVKWJaC",
          description: "Guapanova (formerly known as TVRNFLX), real name Jakub Smieška, is a member of the ConspiracyFlat Studio label. He comes from Nitra and his first song is Wuala, whose music video was released on the Comebackgang YouTube channel.",
          albums: [
            { title: "Album Deluzia", producedBy: "Produced by: Saimo" },
            { title: "Designer Drugs (feat. Rollsout)", producedBy: "Produced by: Tristan Hoodrich" },
            { title: "Loot (feat. Astralkid22)", producedBy: "Produced by: CNSFLT" }
          ],
          image: "DeluziaCover.png",
          audioUrl: "/public/audio/Guapanova-STREETS.mp3",
          color_1: '#ff004d',
          color_2: 'green',
        },
        {
          name: "RAYYY P",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/rayyy-p/1718396296",
          musicProfileSpotify: "https://open.spotify.com/artist/3Ubk6CPpRg4eDsiqK9b3Kl",
          description: "RAYYY P is a rapper, his real name is Jakub Hudec and we are make music together. I am his producer.",
          albums: [
            { title: "Album Mama Dala Peniaze Otec Zaplatil Fame II", producedBy: "Produced by: Majkyyy (me)" },
            { title: "I.D.E.", producedBy: "Produced by: Majkyyy (me)" },
            { title: "BERI 2", producedBy: "Produced by: Majkyyy (me)" }
          ],
          image: "rayyyp.JPG",
          audioUrl: "/public/audio/Mama Dala Peniaze_RAYYY P.mp3",
          color_1: '#ff004d',
          color_2: 'green',
        }
      ],
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
  },
})
</script>