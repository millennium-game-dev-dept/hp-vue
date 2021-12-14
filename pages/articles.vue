<template>
  <v-row>
    <v-col class="text-center">
      <br><h2>記事一覧</h2><br>
      <div id="cards">
        <div class="card">
          <div class="card-picture"><img src="https://i.imgur.com/xPHGUG1.png"></div>
          <div class="card-description">
            <p>絵の描き方のコツ</p>
          </div>
        </div>
        <div class="card" id="card-center">
          <div class="card-picture"><img src="https://i.imgur.com/kKaYFbS.jpg"></div>
          <div class="card-description">
            <p>「ゲーム開発部からのお願い！」に参加していただいた皆さま、ありがとうございました！</p>
          </div>
        </div>
        <div class="card">
          <div class="card-picture"><img src="https://i.imgur.com/xPHGUG1.png"></div>
          <div class="card-description">
            <p>文化祭で出した「テイルズ・サガ・クロニクル 2」です。</p>
          </div>
        </div>
      </div>
      <div id="cards">
        <div class="card">
          <div class="card-picture"><img src="https://i.imgur.com/5iahotQ.png"></div>
          <div class="card-description">
            <p>rustの練習をしようと思います</p>
          </div>
        </div>
        <div class="card" id="card-center">
          <div class="card-picture"><img src="https://i.imgur.com/wNzEAcq.png"></div>
          <div class="card-description">
            <p>ミレニアムゲーム開発部 HP を支える技術</p>
          </div>
        </div>
        <!-- <div class="card" style="border: 0px"></div> -->
        <!-- <div class="card" id="card-center" style="border: 0px"></div> -->
        <div class="card" style="border: 0px"></div>
      </div>
      <br><hr class="my-1"><br>

      <v-card-actions>
        <a href="https://github.com/moyomogi/millennium-game-dev-dept" target="_blank">
          <img src="https://img.shields.io/github/last-commit/moyomogi/vue-testing">
        </a>
        <v-spacer />
        <v-btn color="#666" nuxt to="/">トップに戻る</v-btn>
        <v-btn color="#2c9" nuxt to="/error">作品を見る</v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
</template>

<style>
  #cards {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .card {
    width: 320px;
    height: 270px;
    border: 1px solid lightgray;
  }
  .card:nth-child(2) {
    margin-right: 10px;
    margin-left: 10px;
  }
  .card-picture img {
    width: 100%;
    height: 180px;
  }
  .card-description {
    width: 100%;
    height: 90px;
    padding-right: 12px;
    padding-left: 12px;
    box-sizing: border-box;
  }
  .card-description p {
    font-size: 13px;
    color: #f0f0f0;
  }
</style>
