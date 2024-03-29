<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-app-bar-title> ホームページ </v-app-bar-title>
      </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list>
        <!-- メニュー項目 -->
      <v-list-item title="ホーム" value="home"></v-list-item>
      <v-list-item title="写真集" value="about"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    // メニュー非表示がデフォルト（既定値）
    drawer: false,
  }),
};
</script>