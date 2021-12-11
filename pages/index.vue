<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <GameDevDeptLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          ミレニアムゲーム開発部へようこそ！
        </v-card-title>
        <v-card-text>
          <p>　ミレニアムゲーム開発部は、<a href="https://bluearchive.jp" target="_blank" rel="noopener noreferrer"
          ><MillenniumLogo />ミレニアムサイエンススクール</a>で活動している、創作全般の総合サークル部活です！　絵を描いたり、シナリオを作ったり、たまに (いつも) ゲームをしたりします。</p>
          <br>
          <p>
            Twitter: <a
              href="https://twitter.com/Blue_ArchiveJP"
              target="_blank"
              rel="noopener noreferrer"
            >
              @millennium_games
            </a>
          </p>
          <p>
            YouTube <a
              href="https://www.youtube.com/channel/UCmgf8DJrAXFnU7j3u0kklUQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              ミレニアムゲーム開発部
            </a>
          </p>
          <p>
            Mail: <a
              href="mailto:games-dev-dept@ed.millennium.com"
              rel="noopener noreferrer"
            >
              games-dev-dept@ed.millennium.com
            </a>
          </p>
          <p>お気軽に DM ください！</p>
          <div class="text-xs-right">
            <em><small>&mdash; ゲーム開発部一同</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://github.com/moyomogi/millennium-game-dev-dept"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
