<template>
  <q-layout view="hHh lpR fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header >
      <q-toolbar class="bg-accent">
        <q-toolbar-title class="text-center">
          Watchify
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer>
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

export default {
  // name: 'LayoutName',

  setup () {
  }
}
</script>
