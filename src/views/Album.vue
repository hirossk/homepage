<template>
  <!-- <v-parallax aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> -->
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="12">
      <h1 class="display-1 font-weight-thin mb-4">写真集</h1>
    </v-col>
  </v-row>
  <div class="my-16 d-flex justify-center text-start">
    <v-container>
      <div class="d-flex flex-wrap">
        <!-- カードの描画 -->
        <v-card
          v-for="myCard in myCards"
          class="mr-3"
          max-width="320"
          min-width="200"
        >
          <v-img :src="myCard.url" height="160"></v-img>
          <v-card-title>{{ myCard.title }}</v-card-title>
          <v-card-subtitle>{{ myCard.subtitle }}</v-card-subtitle>
          <v-card-text style="white-space: pre-line; word-wrap: break-word">{{
            myCard.textContent
          }}</v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
  <!-- コメント -->
  <!-- </v-parallax> -->
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Album",
  components: {},

  setup() {
    const myCards = [
      //ここから下をコピーする
      reactive({
        // 写真データの場所
        url: new URL("../assets/photos/cat1.jpg", import.meta.url).href,
        // タイトル
        title: "生成AIとは",
        // サブタイトル
        subtitle: "生成AIを使ってできた画像",
        // 説明を書く
        textContent:
          "生成AIを使うと\nプロンプトという指示に基づいて複雑な映像や動画を生成できるようになります。",
      }),
      //ここまで
    ];

    return {
      myCards,
    };
  },
};
</script>
