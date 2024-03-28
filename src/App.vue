<template>
  <!-- この記述はコメント -->
  <!-- コメントはCtrl＋/で解除・作成の切り替えができます -->
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <About></About>
      <Album></Album>
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