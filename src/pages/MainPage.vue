<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="width: 900px; height: 500px;">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="movies" label="Movies" />
            <q-tab name="songs" label="Songs" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="movies">
              <div class="text-h6 text-center">Movies</div>
              <div class="q-pa-md row-1 col-1">

                <q-card class="my-card">
                  <q-card-section horizontal>
                    <q-img
                      class="col"
                      src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />
                    <q-separator />

                    <q-card-actions vertical class="justify-around">
                      <q-btn flat round color="red" icon="favorite" />
                      <q-btn flat round color="accent" icon="bookmark" />
                      <q-btn flat round color="primary" icon="share" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </div>
              <div class="q-pa-md row-1 col-2">

                <q-card class="my-card">
                  <q-card-section horizontal>
                    <q-img
                      class="col"
                      src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />

                    <q-card-actions vertical class="justify-around">
                      <q-btn flat round color="red" icon="favorite" />
                      <q-btn flat round color="accent" icon="bookmark" />
                      <q-btn flat round color="primary" icon="share" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>

            <q-tab-panel name="songs">
              <div class="text-h6 text-center">Songs</div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
    <q-footer>
      <q-toolbar class="flex flex-center">

          <q-btn-dropdown color="secondary" text-color="primary" label="Languages">
            <q-list>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Russian</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>

      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainPage',

  setup () {
    return {
      tab: ref('movies')
    }
  }
})
</script>
