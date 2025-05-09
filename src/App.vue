<template>
  <!-- この記述はコメント -->
  <!-- コメントはCtrl＋/で解除・作成の切り替えができます -->
  <v-app>
    <!-- メニューバーの表示 -->
    <!-- <AppBar @menu-select="switchView"></AppBar> -->
    <v-main>
      <!-- ホームページについて -->
      <!-- <About></About> -->
      <!-- アルバム -->
      <!-- <Album></Album> -->       
      <!-- 動的に切り替える部分 -->
      <!-- <component :is="currentView"></component> -->
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./views/AppBar.vue";
import About from "./views/About.vue";
import Album from "./views/Album.vue";
import ApiView from "./views/ApiView.vue";

export default {
  name: "App",
  components: {
    AppBar,
    About,
    Album,
    ApiView,
  },
  data() {
    return {
      currentView: "Album", // 初期表示をAlbumに設定
    };
  },
  methods: {
    switchView(viewName) {
      // メニュー選択時にcurrentViewを更新
      this.currentView = viewName;
    },
  },
};
</script>