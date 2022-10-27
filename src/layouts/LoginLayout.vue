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
