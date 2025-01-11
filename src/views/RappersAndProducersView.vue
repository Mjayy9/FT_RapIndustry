<template>
    <h1 class="titles d-flex justify-center"> Rappers And Producers (CZ/SK and USA) </h1>

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

  <v-container v-for="(artist, index) in artistsSlovakia" :key="index" class="d-flex h-full justify-center">
    <v-card class="w-75">
      <v-card-title class="titles font-weight-bold">{{ artist.name }}</v-card-title>
      <v-btn :href="artist.musicProfileAppleMusic" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-apple" class="text-decoration-none ml-3 font-weight-bold" :color="artist.color_1" outlined> Apple Music Profile </v-btn>
      <v-btn :href="artist.musicProfileSpotify" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-spotify" class="text-decoration-none ml-3 font-weight-bold" :color="artist.color_2" outlined> Spotify Profile </v-btn>
      <v-card-text>{{ artist.description }}</v-card-text>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">{{ artist.name }} Albums/Tracks</v-card-subtitle>
      <v-expansion-panels>
        <v-expansion-panel v-for="(album, index) in artist.albums" :key="index" :title="album.title" :text="album.producedBy" bg-color="#ee0979" class="font-weight-bold"></v-expansion-panel>
      </v-expansion-panels>
      <v-img :src="artist.image" class="workspaces d-flex align-center justify-center elevation-24" style="max-width: 400px; border-radius: 15px; margin: 10px auto auto;"></v-img>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">{{ artist.name }} Photo</v-card-subtitle>
      <v-row class="d-flex mb-4 ml-4">
        <v-btn @click="playAudio(artist.audioUrl)" :ripple="true" elevation="24" rounded="lg" color="#ff004d" class="mx-2">PLAY TRACK</v-btn>
        <v-btn @click="stopAudio" color="#ff6a00" :ripple="true" elevation="24" rounded="lg" class="mx-2">STOP TRACK</v-btn>
      </v-row>
    </v-card>
  </v-container>

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

  <v-container v-for="(artist, index) in artistsCzech" :key="index" class="d-flex h-full justify-center">
    <v-card class="w-75">
      <v-card-title class="titles font-weight-bold">{{ artist.name }}</v-card-title>
      <v-btn :href="artist.musicProfileAppleMusic" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-apple" class="text-decoration-none ml-3 font-weight-bold" :color="artist.color_1" outlined> Apple Music Profile </v-btn>
      <v-btn :href="artist.musicProfileSpotify" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-spotify" class="text-decoration-none ml-3 font-weight-bold" :color="artist.color_2" outlined> Spotify Profile </v-btn>
      <v-card-text>{{ artist.description }}</v-card-text>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">{{ artist.name }} Albums/Tracks</v-card-subtitle>
      <v-expansion-panels>
        <v-expansion-panel v-for="(album, index) in artist.albums" :key="index" :title="album.title" :text="album.producedBy" bg-color="#ee0979" class="font-weight-bold"></v-expansion-panel>
      </v-expansion-panels>
      <v-img :src="artist.image" class="workspaces d-flex align-center justify-center elevation-24" style="max-width: 400px; border-radius: 15px; margin: 10px auto auto;"></v-img>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">{{ artist.name }} Photo</v-card-subtitle>
      <v-row class="d-flex mb-4 ml-4">
        <v-btn @click="playAudio(artist.audioUrl)" :ripple="true" elevation="24" rounded="lg" color="#ff004d" class="mx-2">PLAY TRACK</v-btn>
        <v-btn @click="stopAudio" color="#ff6a00" :ripple="true" elevation="24" rounded="lg" class="mx-2">STOP TRACK</v-btn>
      </v-row>
    </v-card>
  </v-container>

  <h1 class="titles d-flex justify-center"> American Rappers and Producers </h1>

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
      currentAudio: null as HTMLAudioElement | null,
      rappersSlovakia: ["Separ", "Luca Brassi10x", "Guapanova", "Shimmi", "AstralKid22", "RAYYY P", "Saul"],
      producersSlovakia: ["Konex", "Mjay Beatz", "Deadway", "Tristan Hoodrich", "SpecialBeatz", "ECM Squad"],
      rappersCzech: ["Yzomandias", "Nik Tendo", "Hard Rico", "Dollar Prync", "Viktor Sheen", "Calin"],
      producersCzech: ["Decky Beats", "DEMO24", "Nemo.wave"],
      artistsSlovakia: [
        {
          name: "Luca Brassi10x",
          musicProfileAppleMusic: "https://music.apple.com/sk/artist/luca-brassi10x/1510257533",
          musicProfileSpotify: "https://open.spotify.com/artist/33ngpBQcfq53FgLhpBDt8i",
          description: "Luka Mašulovič, known mainly by his artist name Luca Brassi, Luca Brssi or Luca Brassi10x, is a Slovak rapper born on 14 December 1994. He started his music career with a feat on Tisci's track \"LV Vačky\" in January 2020. A few months later, Luca releases his first single \"Deep Narco Shit\". In his career Luca Brassi managed to collaborate with people like Yzomandias, NikTendo, Dame, Konex, CA$HANOVA BULHAR, Pil C and many more. Luca Brassi10x is one of the rappers who should own the next few years. He is young, talented and knows how to impress. Besides, he is also considered \"his own\" by artists like Dame or Separ, so he seems to be working hard, otherwise such \"heavyweights\" of Slovak rap wouldn't have taken him in their midst. Last time he made his presence known on Nik Tenda's EP in the track tempo, where Cashanova Bulhar also appeared.",
          albums: [
            { title: "mamaididit", producedBy: "Produced by: Facefront x LUJA" },
            { title: "Mladý ale plný", producedBy: "Produced by: Tristan Hoodrich" },
            { title: "Nikdy ma mať nebudú", producedBy: "Produced by: Mjay Beatz" }
          ],
          image: "IMG_6567.PNG",
          audioUrl: "/public/audio/Lucabrassi10x - Nikdy ma mať nebudú.mp3",
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