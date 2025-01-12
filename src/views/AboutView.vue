<template>
  <h1 class="titles d-flex justify-center">About Me Page</h1>
  <p class="d-flex justify-center font-weight-bold">This page is about me, so let's say something</p>

  <v-container class="d-flex h-full w-48 justify-center">
    <v-card>
      <v-img src="mj.PNG" class="d-flex align-center justify-center elevation-24" style="max-width: 200px; position: absolute; top: 10px; right: 10px; border-radius: 15px;"></v-img>
      <v-card-title class="titles font-weight-bold">Something about me</v-card-title>
      <v-card-text v-for="(text, index) in cardTexts" :key="index" class="v-card-text">{{ text }}</v-card-text>

      <v-btn v-if="instagramLink" :href="instagramLink" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-instagram" class="text-decoration-none ml-3 font-weight-bold" color="pink" outlined>
        Instagram
      </v-btn>

      <v-img src="IMG_5163.PNG" class="workspaces d-flex align-center justify-center elevation-24" style="max-width: 400px; border-radius: 15px; margin: 10px auto auto;"></v-img>
      <v-card-subtitle class="font-weight-bold d-flex justify-center">Produced By Me</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
const cardTexts = [
  "So my name is Majo, my producer name is Majkyyy. I've been making music or beats for 3 years now.",
  "I've done all kinds of collaborations, I've done all kinds of beats. I don't regret even one second I sacrificed to music.",
  "I made this website where on the main page there's a little bit about music, how I started making music, how to make beats, and my gallery of making music.",
  "On the next page called Programs, you can find out about the programs that are used to make music and a little bit about them.",
  "The third page is dedicated to the rap industry, rappers and producers whether Slovak, Czech or rappers and producers from USA.",
  "Next is a page called Store, where you can buy beats from my production. And finally, there is a Contact page where you can contact me about anything.",
  "Thank you for your attention and I wish you a nice time. At the end, I have prepared for you tracks from my surroundings. Luvv<3"
];
const instagramLink = "https://www.instagram.com/majkyy___/";
</script>
