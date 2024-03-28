<template>
    <v-app-bar color="primary">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <router-link to="/" class="toolbar-title">
                ホームページ作品作り
        </router-link>
        <template v-slot:append>
            <v-btn>
                サインイン
            </v-btn>
            <v-btn href="/">
                <v-icon>
                    mdi-home
                </v-icon>
            </v-btn>
        </template>
        <v-spacer />
    <div class="menu">
      <v-btn text to="/">ホーム</v-btn>
      <v-btn text to="/About">ページについて</v-btn>
      <v-btn text to="/Album">アルバム</v-btn>
    </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBar",
    components: {},
};
</script>