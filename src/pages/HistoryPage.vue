<template>
  <q-page class="flex flex-center" style="background-color: #ececec;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1000px">
        <q-card>
          <div class="text-h6 text-center">History</div>
          <div class="container">
            <q-table
              class="container"
              :rows="rows"
              row-key="name"
              v-model:pagination="pagination"
              hide-header
              hide-bottom
            />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

const rows = [
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'aTest',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  },
  {
    name: 'Test',
    type: 'song',
    action: 'play',
    date: '12:34:46 01.02'
  }
]

export default defineComponent({
  name: 'HistoryPage',

  setup () {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 0 // 0 means all rows
      },
      rows
    }
  }
})
</script>

<style lang="sass" scoped>

.container
  display: flex
  flex-wrap: wrap
  justify-content: center
  width: 600px
  max-height: 600px
.movies
  flex: 0 0 215px
  margin: 1em 20px
.songs
  flex: 0 0 215px
  margin: 1em 20px
</style>
