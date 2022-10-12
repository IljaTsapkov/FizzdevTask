<template>
  <q-page class="flex flex-center" style="background-color: #ececec;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1000px">
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

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="movies" flat bordered>
                  <q-card-section horizontal>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="absolute-bottom text-subtitle2 text-left">
                      Title
                    </div>

                    <q-card-actions vertical class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

              </div>
            </q-tab-panel>

            <q-tab-panel name="songs">

              <div class="container">

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

                <q-card class="songs" flat bordered>
                  <q-card-section vertical>
                    <q-img
                      src="http://dummyimage.com/100x100.png/dddddd/000000"
                    />
                    <div class="text-subtitle2 absolute-top text-center">
                      Placeholder
                    </div>

                    <q-card-actions horizontal class="justify-around q-px-md">
                      <q-btn flat round color="accent" icon="favorite" />
                      <q-btn flat round color="accent" icon="play_circle" />
                    </q-card-actions>
                  </q-card-section>
                </q-card>

              </div>
            </q-tab-panel>
          </q-tab-panels>
          <div class="q-pa-lg flex flex-center">
            <q-pagination
              color="accent"
              v-model="current"
              :max="5"
            />
          </div>
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
      current: ref(1)
    }
  }
})
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-wrap: wrap
  justify-content: center
  padding: 40px calc((100% - (255px * 3)) / 2)
.movies
  flex: 0 0 215px
  margin: 1em 20px
.songs
  flex: 0 0 215px
  margin: 1em 20px
</style>
