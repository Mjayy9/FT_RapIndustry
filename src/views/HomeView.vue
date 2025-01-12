<template>
  <v-container class="d-flex h-full justify-center">
    <v-card class="w-33" image="FL Studio Logo.png">
      <v-card-title class="text-white"> MUSIC </v-card-title>
      <v-card-subtitle class="font-weight-bold text-white"> Rap Industry, Programs, Rappers, Producers </v-card-subtitle>
      <v-card-text class="card-text d-flex text-white"> Music is the best way how to express feelings or moods, it could be through writing lyrics, making or producing beats and know how to make it </v-card-text>
    </v-card>
  </v-container>

  <v-container class="d-flex justify-center" v-for="(section, index) in sections" :key="index">
    <v-card class="w-75">
      <v-card-title v-if="section.title" class="titles font-weight-bold">{{ section.title }}</v-card-title>
      <v-card-text v-if="section.text">{{ section.text }}</v-card-text>
      <v-card-text v-if="section.additionalText">{{ section.additionalText }}</v-card-text>
      <v-img v-if="section.imgSrc" :src="section.imgSrc" :class="section.imgClass"></v-img>
      <v-card-subtitle v-if="section.subtitle" class="titles ml-6">{{ section.subtitle }}</v-card-subtitle>
    </v-card>
  </v-container>

  <v-container>
    <v-row>
      <v-col cols="4" v-for="(image, index) in images" :key="index">
        <v-img :src="image.src" class="rounded-lg elevation-24"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      sections: [
        {
          title: "Music",
          text: "Personally for me it is an irreplaceable part of every day, I listen to music whenever I can. Music has always been an activity for me when I can relax, chill out. I've been listening to music since I was a kid and of course that taste in music has evolved over time. In the beginning it was mostly radio tracks and later when I was older it was rap/hip-hop tracks that weren't played on the radio because of the vulgarisms in the tracks."
        },
        {
          title: "Making Beats",
          text: "fuh, to be honest making beats, it's not as easy as one would think because first you have to have a program where you make the beat. I don't mean making music where there's a vocal plus an overall beat. When you have plugins from which you make the melody...",
        },
        {
          title: "My Experience with music",
          text: "My first experience with making music was about a year and a half ago. It's quite an interesting story because one day I was out with my friend and we were having a normal conversation like we always do and he was telling me that he's been writing lyrics for quite a long time and he wanted to start making music somehow, but he doesn't have or know anyone who makes beats.",
          additionalText: "So I decided to give it a go myself. So I wrote to my friend Adam and asked him if he knew of a program that you can make beats in and he told me that LMMS is one that you can learn how to make beats in.",
          imgSrc: "LMMS Logo.png",
          imgClass: "lmms ml-4 mt-n1 elevation-24",
          subtitle: "LMMS Software Logo"
        },
        {
          title: "Making Beats",
          text: "So I started to learn how to make beats in LMMS and at first it was very hard but over time I made some beats in that program as well. But there was one major problem and that was that it was possible to make music in that program, but it was pretty bad to do the master and the overall arrangement. That's why I changed LMMS for FL Studio, which is used by the most famous producers and it's a really brilliant program in which you can do amazing things.",
          additionalText: "We even have some beats together and we did a beat for the rapper RuckFiso and it was great, I did the melody and he did the drums.",
          imgSrc: "FL Studio Logo + Text.jpeg",
          imgClass: "mt-5 ml-5 mr-5 mb-5 elevation-24 d-flex justify-center"
        }
      ],
      images: [
        { src: "IMG_2682.JPG" },
        { src: "IMG_2683.JPG" },
        { src: "IMG_2684.JPG" }
      ]
    };
  },
};
</script>
