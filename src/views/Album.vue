<template>
  <!-- <v-parallax aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> -->
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">写真集</h1>
      </v-col>
    </v-row>
    <div class="my-16 d-flex justify-center text-start">
      <!--カード1枚目-->
      <v-card v-for="myCard in myCards" class="mr-3" max-width="320">
        <v-img :src="myCard.url" height="160"></v-img>
        <v-card-title>{{ myCard.title }}</v-card-title>
        <v-card-subtitle>{{ myCard.subtitle }}</v-card-subtitle>
        <v-card-text>{{ myCard.textContent }}</v-card-text>
      </v-card>
    </div>
  <!-- </v-parallax> -->
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "Album",
  components: {},
  setup() {
    const myCards = [
      reactive({
      url: 'https://picsum.photos/320/160?random=1',
      title: 'Vuetifyとは1',
      subtitle: 'その魅力を知ってみる1',
      textContent: 'Vuetifyは、Vue.js上で動作するUIフレームワークで、マテリアルデザインを適切に取り入れており、優れたUIを効率よく制作することができます。'
    }),
    reactive({
      url: 'https://picsum.photos/320/160?random=2',
      title: 'Vuetifyとは2',
      subtitle: 'その魅力を知ってみる2',
      textContent: 'Vuetifyは、Vue.js上で動作するUIフレームワークで、マテリアルデザインを適切に取り入れており、優れたUIを効率よく制作することができます。'
    }),
    reactive({
      url: 'https://picsum.photos/320/160?random=3',
      title: 'Vuetifyとは3',
      subtitle: 'その魅力を知ってみる3',
      textContent: 'Vuetifyは、Vue.js上で動作するUIフレームワークで、マテリアルデザインを適切に取り入れており、優れたUIを効率よく制作することができます。'
    }),
  ]
    return {
      myCards
    }
  },
};
</script>