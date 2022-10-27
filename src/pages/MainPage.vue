<template>
  <q-page class="flex flex-center" style="background-color: #ececec;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1500px;">
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
            <q-tab name="movies" label="Movies" />
            <q-tab name="songs" label="Songs" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="movies">
              <div class="text-h6 text-center">Movies</div>

              <div class="container">
                <q-card class="movies" bordered v-for="movie in movies.slice((currentMovie-1)*perPage,(currentMovie-1)*perPage+perPage)" :key="movie.id">
                  <q-card-section horizontal>
                    <q-img
                      style="max-height: 220px"
                      :src="movie.image"
                    />

                    <q-card-actions vertical class="justify-around">
                      <q-btn
                      flat
                      round
                      @click="clicked = !clicked"
                      :class="[ { 'clicked': clicked} ]"
                      icon="favorite"
                      />
                      <q-btn
                      refs="test"
                      @click="showNotif()"
                      placeholder="movie.name"
                      flat
                      round
                      icon="play_circle"
                      />
                    </q-card-actions>
                  </q-card-section>

                  <q-separator />

                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">{{movie.name}}</div>
                </q-card>
              </div>

              <div class="q-pa-lg flex flex-center">
                <q-pagination
                  color="grey"
                  active-color="accent"
                  direction-links
                  v-model="currentMovie"
                  :per-page="perPage"
                  :max="17"
                />
              </div>
            </q-tab-panel>

            <q-tab-panel name="songs">
              <div class="text-h6 text-center">Songs</div>

              <div class="container">

                <q-card class="songs" bordered v-for="song in songs.slice((currentSong-1)*perPage,(currentSong-1)*perPage+perPage)" :key="song.id">
                  <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">{{song.name}}</div>

                  <q-separator />

                  <q-card-section>
                    <q-img
                      style="max-height: 220px"
                      :src="song.image"
                    />

                    <q-card-actions class="justify-around" style="max-height: auto;">
                      <q-btn
                      flat
                      round
                      icon="favorite"
                      />
                      <q-btn
                      flat
                      round
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
                :per-page="perPage"
                :max="17"
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
import { useQuasar } from 'quasar'
import moviesData from 'assets/json/movies.json'
import songsData from 'assets/json/songs.json'

export default defineComponent({
  name: 'MainPage',

  data () {
    const $q = useQuasar()

    return {
      tab: ref('movies'),
      currentMovie: ref(1),
      currentSong: ref(1),
      perPage: 6,
      movies: moviesData,
      songs: songsData,
      clicked: false,

      showNotif () {
        $q.notify({
          timeout: 20000,
          message: 'Playing: ' + this.$refs.test,
          color: 'secondary',
          textColor: 'accent',
          badgeStyle: 'opacity: 0',
          actions: [
            { icon: 'stop_circle', color: 'blue', backgroundColor: 'primary', handler: () => { /* ... */ } }
          ]
        })
      }
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

.truncate
  line-height: 30px
  max-height: 30px
  max-width: 353px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.clicked
  color: red
</style>
