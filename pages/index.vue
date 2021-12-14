<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <MascotLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          ミレニアムゲーム開発部 HP へようこそ！
        </v-card-title>
        <v-card-text>
          <p>　ミレニアムゲーム開発部は、<a href="https://bluearchive.jp" target="_blank" rel="noopener noreferrer"
          ><img height="16" alt="millennium" src="../static/millennium.svg">ミレニアムサイエンススクール</a>で活動している創作全般の総合サークル部活です！　絵を描いたり、シナリオを作ったり、たまに (いつも) ゲームをしたりします。</p>

          <img src="https://i.imgur.com/PIg9JmR.png" width="400" style="border-radius: 5px;">
          <br><br>
          お気軽に DM ください！
          <div class="text-xs-right" style="padding: 0px 0px 10px;">
            <small>&mdash; ゲーム開発部一同</small>
          </div>
          <ul class="logo">
            <li><a href="https://twitter.com/Blue_ArchiveJP" target="_blank" rel="noopener noreferrer">
              <img height="40" alt="twitter" src="../static/twitter.svg">
            </a></li>
            <li><a href="https://www.youtube.com/channel/UCmgf8DJrAXFnU7j3u0kklUQ" target="_blank" rel="noopener noreferrer">
              <img height="40" alt="youtube" src="../static/youtube.svg">
            </a></li>
            <li><a href="mailto:game-dev-dept@millennium.ed.net" rel="noopener noreferrer">
              <img height="40" alt="mail" src="../static/mail.svg">
            </a></li>
          </ul>
          <br><hr class="my-1">
        </v-card-text>
        <v-card-actions>
          <a href="https://github.com/moyomogi/millennium-game-dev-dept" target="_blank">
            <img src="https://img.shields.io/github/last-commit/moyomogi/vue-testing">
          </a>
          <v-spacer />
          <v-btn color="#c26" nuxt to="/articles">記事を見る</v-btn>
          <v-btn color="#2c9" nuxt to="/error">作品を見る</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.logo {
  display: flex;
}
.logo li {
  list-style: none;
}
.logo li:nth-child(2) {
  margin: 0 10px;
}
</style>
