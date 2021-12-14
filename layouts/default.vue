<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <NuxtLink to="/">
        <img src="../static/mascot.png" alt="mascot.png" height="50px" style="margin: 5px;">
      </NuxtLink>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span><small>
        &copy; 2020-{{ new Date().getFullYear() }} Millennium Game Dev Dept
      </small></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'ゲーム開発部について',
          to: '/'
        },
        {
          icon: 'mdi-book-open-variant',
          title: '記事一覧',
          to: '/articles'
        },
        {
          icon: 'mdi-gamepad-variant',
          title: '作品紹介',
          to: '/error'
        },
        {
          icon: 'mdi-account-circle',
          title: '部員プロフィール',
          to: '/error'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'ミレニアムゲーム開発部 HP'
    }
  }
}
</script>
