<template>
  <q-page class="flex flex-center" style="background-color: #ececec;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1500px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="accent"
            indicator-color="accent"
            align="justify"
            narrow-indicator
          >
            <q-tab name="movies" label="Favourite Movies" />
            <q-tab name="songs" label="Favourite Songs" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="movies">

              <div class="container">

                <q-card class="movies" bordered>
                  <q-card-section horizontal>
                    <q-img
                      style="max-height: 220px"
                    />

                    <q-card-actions vertical class="justify-around">
                      <q-btn
                      flat
                      round
                      color="red"
                      icon="favorite"
                      />
                      <q-btn
                      @click="btnNotify()"
                      flat
                      round
                      color="accent"
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />

                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>
                </q-card>

                <q-card class="movies" bordered>
                  <q-card-section horizontal>
                    <q-img
                      style="max-height: 220px"
                    />

                    <q-card-actions vertical class="justify-around">
                      <q-btn
                      flat
                      round
                      color="red"
                      icon="favorite"
                      />
                      <q-btn
                      @click="btnNotify()"
                      flat
                      round
                      color="accent"
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />

                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>
                </q-card>

                <q-card class="movies" bordered>
                  <q-card-section horizontal>
                    <q-img
                      style="max-height: 220px"
                    />

                    <q-card-actions vertical class="justify-around">
                      <q-btn
                      flat
                      round
                      color="red"
                      icon="favorite"
                      />
                      <q-btn
                      @click="btnNotify()"
                      flat
                      round
                      color="accent"
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />

                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>
                </q-card>

              </div>
              <div class="q-pa-lg flex flex-center">
                <q-pagination
                color="grey"
                active-color="accent"
                direction-links
                v-model="currentMovie"
                :max="1"
                />

              </div>
            </q-tab-panel>

            <q-tab-panel name="songs">

              <div class="container">

                <q-card class="songs" bordered>
                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>

                  <q-separator />

                  <q-card-section>
                    <q-img
                      style="max-height: 220px"
                    />

                    <q-card-actions class="justify-around" style="max-height: auto;">
                      <q-btn
                      flat
                      round
                      color="red"
                      icon="favorite"
                      />
                      <q-btn
                      flat
                      round
                      color="accent"
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />
                </q-card>

                <q-card class="songs" bordered>
                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>

                  <q-separator />

                  <q-card-section>
                    <q-img
                      style="max-height: 220px"

                    />

                    <q-card-actions class="justify-around" style="max-height: auto;">
                      <q-btn
                      flat
                      round
                      color="red"
                      icon="favorite"
                      />
                      <q-btn
                      flat
                      round
                      color="accent"
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />
                </q-card>

                <q-card class="songs" bordered >
                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>

                  <q-separator />

                  <q-card-section>
                    <q-img
                      style="max-height: 220px"
                    />

                    <q-card-actions class="justify-around" style="max-height: auto;">
                      <q-btn
                      flat
                      round
                      color="red"
                      icon="favorite"
                      />
                      <q-btn
                      flat
                      round
                      color="accent"
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />
                </q-card>

              </div>
              <div class="q-pa-lg flex flex-center">
                <q-pagination
                color="grey"
                active-color="accent"
                direction-links
                v-model="currentSong"
                :max="1"
                />

              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FavouritesPage',

  setup () {
    return {
      tab: ref('movies'),
      currentMovie: ref(1),
      currentSong: ref(1)
    }
  }
})
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-wrap: wrap
  justify-content: center
  padding: 40px
.movies
  flex: 0 0 33.333333%
  margin: 1em 20px
  max-height: 300px
  width: 400px
  max-width: 400px
.songs
  flex: 0 0 33.333333%
  margin: 1em 20px
  width: 400px
  max-width: 400px
</style>
