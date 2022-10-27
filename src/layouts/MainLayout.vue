<template>
  <q-layout view="hHh lpR fFf">
    <q-header >
      <q-toolbar class="bg-accent">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title class="text-center">
          Watchify
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          label="Logout"
          @click="logout"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="500"
  >
    <q-scroll-area class="fit">

      <div style=" padding: 10px 10px 10px 10px ; max-width: 200px">
        <q-select square outlined v-model="select" :options="languages" bg-color="secondary" filled color="accent" placeholder="Languages" />
      </div>

      <q-list padding class="menu-list">
        <q-item
        to="/home"
        exact
        clickable
        v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item
        to="/favourites"
        clickable
        v-ripple>
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section>
            Favourites
          </q-item-section>
        </q-item>

        <q-item
        to="/history"
        clickable
        v-ripple>
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>

          <q-item-section>
            History
          </q-item-section>
        </q-item>

      </q-list>
    </q-scroll-area>
  </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer >
      <q-toolbar class="flex flex-center bg-accent">

        <div style=" padding: 10px 10px 10px 10px ; max-width: 200px">
          <q-select square outlined v-model="select" :options="languages" bg-color="secondary" filled color="accent" placeholder="Languages" />
        </div>

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
      drawer: ref(false),
      select: ref('English'),
      languages: [
        'English', 'Русский'
      ]
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
      this.$router.push('/')
        .then(() => {
          this.$q.notify({ message: 'Sign Out Success.' })
        })
        .catch(error => console.log('error', error))
    }
  }
})
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
