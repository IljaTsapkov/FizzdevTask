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
          @click="$router.replace('/')"
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

        <q-item clickable v-ripple>
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

          <q-btn-dropdown color="secondary" text-color="accent" label="Languages">
            <q-list>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Русский</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    return {
      drawer: ref(false)
    }
  }
})
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
