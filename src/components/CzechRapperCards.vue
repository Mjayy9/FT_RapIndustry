<template>
  <v-container v-for="(artist, index) in artistsCzech" :key="index" class="d-flex h-full justify-center">
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
import {defineComponent} from "vue";

export default defineComponent({
  name: "RappersAndProducersView",
  data() {
    return {
      currentAudio: null as HTMLAudioElement | null,
      artistsCzech: [
        {
          name: "Yzomandias",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/yzomandias/1074387486",
          musicProfileSpotify: "https://open.spotify.com/artist/721o1Z0J6jQupyzLt9RnEk",
          description: "Yzomandias (real name Jakub Vlček; * 21 March 1991, Karlovy Vary) is a Czech rapper. He formed the group Milion+. He started making music 16 years ago. Yzomandias was a member of the Czech group Yzo Empire. He releases his latest albums under the label Milion+ (M+). Yzomandias is my most favourite rapper.",
          albums: [
            { title: "Milion+ Entertainment Album KML (Krtek Money Life)", producedBy: "Produced by: Konex" },
            { title: "Gremlin (feat. PTK)", producedBy: "Produced by: Decky Beats" },
            { title: "No Sleep Gang (feat. PTK)", producedBy: "Produced by: Decky Beats" }
          ],
          image: "yzomandias-7.png",
          audioUrl: "/public/audio/Gremlin - P T K, Yzomandias.mp3",
          color_1: '#ff004d',
          color_2: 'green',
        },
        {
          name: "Nik Tendo",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/nik-tendo/1081723687",
          musicProfileSpotify: "https://open.spotify.com/artist/6gvVFtkTV4OCyQSCzGgU1h",
          description: "Dominik Citta, better known by his stage name Nik Tendo, is a Czech rapper recording for Milion+ Entertainment. He has released albums: Goldkid (2017), GoldCigo (2018), 7 (2018), Fatamorgana (2019), Restart & Lunazar (2020), Jsem v pohodě, sem v prdeli (2021), Kruhy & Vlny (2022, with Yzomandias), *PATTERN* (2023, with NobodyListen) and V gastru nejsou lidi (2024), and has also collaborated on the label's compilation albums Milion+ Krtek Money Life (2018) and Krtek Forever (2023). He has also released several EPs, including 777 (2024) and Game1 (2024, with Ben Cristovao).",
          albums: [
            { title: "Album *PATTERN*", producedBy: "Produced by: NobodyListen" },
            { title: "Album FATAMORGANA", producedBy: "Produced by: Decky Beats" },
            { title: "Album v gastru nejsou lidi (Chief's Deluxe)", producedBy: "Produced by: Decky Beats" },
          ],
          image: "niko.jpg",
          audioUrl: "/public/audio/Bílá Černá - Nik Tendo.mp3",
          color_1: '#ff004d',
          color_2: 'green',
        },
        {
          name: "Viktor Sheen",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/viktor-sheen/882854586",
          musicProfileSpotify: "https://open.spotify.com/artist/4cG43cUBRJWWDsRh4SW48i",
          description: "Viktor Sheen, born Viktor Dundich on August 15, 1993, in Almaty, Kazakhstan, is a Czech rapper known for his work in hip hop, trap, and pop music. He began his career in 2008 and has since released several studio albums independently, with support from Warner Music Czech Republic. His most recent album was released on November 8, 2024. Viktor Sheen has achieved significant success, with some of his albums earning multiple platinum certifications in the Czech Republic. He is also a father to three daughters born in 2019, 2021, and 2024.",
          albums: [
            { title: "Album Impostor Syndrom", producedBy: "Produced by: Viktor Sheen" },
            { title: "Album ROADTRIP (feat. Calin)", producedBy: "Produced by: Konex" },
            { title: "Album Černobílej svet", producedBy: "Produced by: Decky Beats" }
          ],
          image: "Viktor_Sheen.jpg",
          audioUrl: "/public/audio/Máta - Viktor Sheen.mp3",
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