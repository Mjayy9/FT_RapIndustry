<template>
  <h1 class="titles d-flex justify-center"> This page is about programs where you can make music so let's talk about the most famous music programs </h1>

  <v-container class="d-flex h-full justify-center">
    <v-card class="w-33">
      <v-row>
        <v-col cols="8">
          <v-card-title class="titles">Music Programs</v-card-title>
          <v-card-subtitle class="font-weight-bold">List of some music programs</v-card-subtitle>
          <v-list>
            <v-list-item v-for="(item, index) in musicSoftware" :key="index">
              <v-list-item-title class="font-weight-bold">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="4" class="d-flex align-center justify-center">
          <v-img src="ableton.png" class="ableton mr-16"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>

  <v-container v-for="(software, index) in softwareList" :key="index" class="d-flex h-full justify-center">
    <v-card class="w-75">
      <v-card-title class="titles font-weight-bold">{{ software.title }}</v-card-title>
      <v-btn v-if="software.link" :href="software.link.url" prepend-icon="$vuetify" target="_blank" rel="noopener noreferrer" class="text-decoration-none ml-3 font-weight-bold" :color="software.color" outlined>{{ software.link.text }}</v-btn>
      <v-card-text>{{ software.description }}</v-card-text>
      <v-card-subtitle class="font-weight-bold" v-if="software.requirements">System requirements</v-card-subtitle>
      <v-card-text v-if="software.requirements">{{ software.requirements }}</v-card-text>
      <v-card-subtitle class="font-weight-bold" v-if="software.features">Program features</v-card-subtitle>
      <v-card-text v-if="software.features">{{ software.features }}</v-card-text>
      <v-img v-if="software.image" :src="software.image" class="workspaces d-flex align-center justify-center elevation-24" style="max-width: 800px; border-radius: 15px; margin: 0 auto;"></v-img>
      <v-card-subtitle class="font-weight-bold d-flex justify-center" v-if="software.image"> {{ software.title }} Workspace </v-card-subtitle>
    </v-card>
  </v-container>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProgramsView",
  data() {
    return {
      musicSoftware: ["LMMS", "FL Studio", "Ableton", "Cubase", "Logic Pro"],
      softwareList: [
        {
          title: 'LMMS',
          link: {
            url: 'https://lmms.io',
            text: 'LMMS Website',
          },
          description: 'LMMS (previously Linux MultiMedia Studio) is a digital audio workstation application. When LMMS is run on a computer with the necessary hardware, it allows you to create music by arranging samples, synthetic sounds, and playing on a MIDI keyboard, and combines the features of trackers and sequencers. It supports the LADSPA (Linux Audio Developer\'s Simple Plugin API) and VST extensions. It is free software released under the GNU version 2.\n' + '\n',
          requirements: 'LMMS is available for multiple operating systems, including GNU/Linux, OS X and Windows. It requires a 1 GHz processor (CPU), 512 MB of RAM, and a dual-channel sound card.',
          features: 'LMMS accepts soundfonts and GUS patches. Musical Instrument Digital Interface (MIDI) files and files from Hydrogen can be imported. Import from FL Studio project (FLP) was also supported, but has been removed. Can write and read customized presets and themes. Audio can be exported to OGG and WAV formats, and projects can be saved as pure XML MMPs or as a compressed MMPZ file format.\n' + '\n',
          image: 'LMMS Worksapce.png',
          color: 'green'
        },
        {
          title: 'FL Studio',
          link: {
            url: 'https://www.image-line.com/',
            text: 'FL Studio Website',
          },
          description: 'FL Studio (previously known as FruityLoops) is a digital audio workstation developed by the Belgian company Image-Line. FL Studio includes a graphical user interface similar to a sequencer. The program is available in four versions FL Studio Express, Fruity Edition, Producer Edition and Signature Bundle Image-Line provides lifetime updates to the program, giving users all updates for free. Image-Line has also created a version of FL Studio Mobile for iPod Touch, iPhone, iPad and Android devices. This program is used to create music, using MIDI techniques to create tones.',
          requirements: 'FL Studio comes in several editions with different levels of functionality. The free trial version includes all of the program\'s features, all plugins, and allows users to render project audio to WAV, MIDI, MP3, and OGG. Projects saved while in demo mode, however, can only be opened once FL Studio and its plugins have been registered. Also, instrument presets cannot be saved and the audio output of some instruments will cut out momentarily every few minutes until the program and its plugins have been registered.',
          features: 'The Fruity Edition allows users to access the playlist, piano roll, and event automation features, which allow for complex and lengthy arranging and sequencing. There is also VST/ReWire support so that FL Studio can be an instrument in other hosts such as Cubase, Sonic Solutions, and Logic. As of version 21.0.3, this edition includes 84 instruments and effects; it does not support audio recording and the use of audio clips. "The Producer Edition includes all of the features of the Fruity Edition, as well as full audio recording for internal and external audio and post-production tools. It allows for hand-drawing point and curve based splines (referred to as automation clips). Plugins include Edison, Slicex (loop slicer and re-arranger), Sytrus, Maximus, Vocodex and Synthmaker. It also allows for waveform viewing of audio clips and the ability to add cue points. This edition includes the Producer Edition as well as a series of plugins such as the Fruity Video Player, DirectWave Sampler, Harmless, NewTone, Pitcher, Gross Beat and the Hardcore Guitar Effects Suite. The All Plugins Edition includes the Signature Bundle along with extra plugins, particularly synthesizers.',
          image: 'FL Studio Workspace.png',
          color: '#ff004d'
        },
        {
          title: 'Ableton',
          link: {
            url: 'https://www.ableton.com/en/',
            text: 'Ableton Website',
          },
          description: 'Ableton Live, also known as Live or sometimes colloquially as "Ableton", is a digital audio workstation for macOS and Windows developed by the German company Ableton. In contrast to many other software sequencers, Live is designed to be an instrument for live performances as well as a tool for composing, recording, arranging, mixing, and mastering. It is also used by DJs, as it offers a suite of controls for beatmatching, crossfading, and other different effects used by turntablists, and was one of the first music applications to automatically beatmatch songs. Live is available directly from Ableton in three editions:Ableton Live, also known as Live or sometimes colloquially as "Ableton", is a digital audio workstation for macOS and Windows developed by the German company Ableton. In contrast to many other software sequencers, Live is designed to be an instrument for live performances as well as a tool for composing, recording, arranging, mixing, and mastering. It is also used by DJs, as it offers a suite of controls for beatmatching, crossfading, and other different effects used by turntablists, and was one of the first music applications to automatically beatmatch songs. Live is available directly from Ableton in three editions:',
          requirements: 'Intro (with limited key features), Standard, and Suite (with the most features). Suite includes Max for Live functionality, made possible in partnership with Cycling \'74. Ableton has also made a fourth version of Live, Lite, with similar limitations to Intro, which is only available bundled with a range of music production hardware, including MIDI controllers and audio interfaces.',
          features: 'Much of Live\'s interface comes from being designed for use in live performance, as well as for production. There are few pop up messages or dialogs. Portions of the interface are hidden and shown based on arrows which may be clicked to show or hide a certain segment (e.g. to hide the instrument/effect list or to show or hide the help box). Live now supports latency compensation for plug-in and mixer automation.\n' + '\n',
          image: 'Ableton Workspace.jpg',
          color: 'blue'
        },
        {
          title: 'Cubase',
          link: {
            url: 'https://www.steinberg.net/cubase/',
            text: 'Cubase Website',
          },
          description: 'Cubase is a digital audio workstation developed by Steinberg for music and MIDI recording, arranging and editing. The first version, which was originally only a MIDI sequencer and ran on the Atari ST computer, was released in 1989. Cut-down versions of Cubase are included with almost all Yamaha audio and MIDI hardware, as well as hardware from other manufacturers. These versions can be upgraded to a more advanced version at a discount.',
          requirements: 'When Cubase 6 was released in 2011, Steinberg introduced 5 different editions for different levels of use. From highest to lowest they are: Cubase (now known as Cubase Pro), Cubase Artist, Cubase Elements, Cubase AI and Cubase LE. They have all been updated as new versions come out. While they all run on the same audio engine, the lower tiers have limits on the number of certain types of tracks. The number of audio tracks allowed in Cubase Pro is unlimited\n' + '\n',
          features: 'Cubase has unlimited audio tracks in Pro edition.',
          image: 'Cubase Workspace.png',
          color: 'red'
        }
      ]
    };
  },
})
</script>

