<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fFf"
    :left-class="{'bg-grey-2': true}"
    :page-class="{'row justify-center items-center bg-pink-4': !userLogged}">
    <q-toolbar slot="header" color="pink" v-if="userLogged">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        {{ title }}
        <!-- <div slot="subtitle">Running on Quasar v{{$q.version}}</div> -->
      </q-toolbar-title>
      <q-btn flat>
        <q-icon name="tune" />
      </q-btn>
      <q-btn flat @click="toggleFilterList()">
        <q-icon name="search" />
      </q-btn>
       <!-- <q-btn ref="target" flat>
        <q-icon name="more_vert" />
        <q-popover ref="popover_header" anchor="bottom right" self="top right">
          <q-list item-separator link>
            <q-item @click="$refs.popover_header.close()">
              Contactanos
            </q-item>
            <q-item @click="$refs.popover_header.close()">
              Acerca de...
            </q-item>
          </q-list>
        </q-popover>
      </q-btn> -->
    </q-toolbar>

    <!-- <q-tabs slot="navigation" color="pink">
      <q-tab default slot="title"name="tab-1" label="Maquillaje" />
      <q-tab slot="title" name="tab-2" label="Peluquería" />
      <q-tab slot="title" name="tab-3" label="Manos" />
      <q-tab slot="title" name="tab-4" label="Pies" />
    </q-tabs> -->

    <div slot="left" v-if="userLogged">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->
      <div id="user-panel" class="row items-center">
        <div class="col-3 text-center">
          <!-- <img class="avatar" :src="'http://www.gravatar.com/avatar/' + emailhash + '?d=wavatar'" alt=""> -->
          <img class="avatar" :src="user.photoURL" alt="">
        </div>
        <div class="col-8">
          <div>{{ user.displayName ? user.displayName : user.email }}</div>
          <div @click="logout"><small>Cerrar sesión</small></div>
        </div>
      </div>
      <q-list no-border link inset-delimiter>
        <q-list-header>Menú</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side :icon="$q.theme === 'mat' ? 'settings' : 'ion-ios-gear-outline'" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item-separator />
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
    <router-view></router-view>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import md5 from 'md5'

import {
  openURL,
  QLayout,
  QTabs,
  QTab,
  QTabPane,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QPopover,
  QSearch,
  AddressbarColor
} from 'quasar'

AddressbarColor.set('#AC1649')

export default {
  name: 'TuLook',
  components: {
    QLayout,
    QTabs,
    QTab,
    QTabPane,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemSeparator,
    QSearch,
    QPopover
  },
  data () {
    return {
      // usuario: firebase.auth().currentUser
    }
  },
  beforeMount () {
    if (!this.userLogged) this.$router.push('/login')
  },
  computed: {
    ...mapState(['title', 'userLogged', 'user']),
    emailhash () {
      return md5(this.user.email)
    }
  },
  methods: {
    launch (url) {
      openURL(url)
    },
    toggleFilterList () {
      this.$store.dispatch('toggleFilterList')
    },
    logout () {
      firebase.auth().singOut().then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="stylus">
  .layout-header, .layout-footer {
    color: #333;
    background: #fff;
    z-index: 2000;
  }

  #user-panel {
    min-height: 80px;
    padding: 3px;
    border-bottom: #e91e63 solid 2px;
  }

  #email {
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>