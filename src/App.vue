<template>
  <!-- この記述はコメント -->
  <!-- コメントはCtrl＋/で解除・作成の切り替えができます -->
  <v-app>
    <!-- メニューバーの表示 -->
    <!-- <AppBar></AppBar> -->
    <v-main>
      <!-- ホームページについて -->
      <!-- <About></About> -->
      <!-- アルバム -->
      <!-- <Album></Album> -->
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./views/AppBar.vue";
import About from "./views/About.vue";
import Album from "./views/Album.vue";
export default {
  name: "App",
  components: {
    AppBar,
    About,
    Album,
  },
}
</script>