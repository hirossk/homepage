<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
    <v-app-bar-title> ホームページ </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <!-- メニュー項目 -->
      <v-list-item title="写真集" value="ApiView" @click="$emit('menu-select', 'Album')"></v-list-item>
      <v-list-item title="Api呼び出し" value="About" @click="$emit('menu-select', 'ApiView')"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
  // メニュー非表示がデフォルト（既定値）
  drawer: false,
  }),
  methods: {
  onMenuSelect(value) {
    console.log(`Selected menu: ${value}`);
    // Perform your desired action here
    // this.drawer = false; // Close the drawer after selection
  },
  },
};
</script>