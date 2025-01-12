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

  <BeatCards></BeatCards>
</template>

<script lang="ts">
import BeatCards from "@/components/BeatCards.vue";

export default {
  components: { BeatCards },
}
</script>

