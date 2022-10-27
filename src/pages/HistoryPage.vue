<template>
  <q-page class="flex flex-center" style="background-color: #ececec;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1500px">
          <div class="container">
            <q-table
            class="table text-center"
            title="History"
            :rows="rows"
            :columns="columns"
            :hide-pagination="true"
            row-key="name"
          >

            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th auto-width />
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td auto-width>
                  <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="props.expand = !props.expand" ></q-btn>
                </q-td>
                <q-td
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                >
                  {{ col.value }}
                </q-td>
              </q-tr>
              <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                  <q-card class="movies" bordered>
                    <q-card-section horizontal>
                      <q-img
                        style="max-height: 220px"
                        src="movie.image"
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
                        @click="showNotif()"
                        placeholder="movie.name"
                        flat
                        round
                        icon="play_circle"
                        />
                      </q-card-actions>
                    </q-card-section>

                    <q-separator />

                    <div class="text-h6 q-mt-sm q-mb-xs text-center truncate">Test</div>
                  </q-card>
                </q-td>
              </q-tr>
            </template>

          </q-table>
          </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'type', align: 'center', label: 'Type', field: 'type', sortable: true },
  { name: 'action', label: 'Action', field: 'action', sortable: true },
  { name: 'date', label: 'Date', field: 'date' }
]

const rows = [
  {
    name: 'Ragtime',
    type: 'Movie',
    action: 'Play',
    date: '12:34:45 01.02'
  },
  {
    name: 'Baboon, olive',
    type: 'Song',
    action: 'Play',
    date: '11:44:05 11.02'
  },
  {
    name: 'Kongoni',
    type: 'Song',
    action: 'Play',
    date: '01:04:55 25.12'
  },
  {
    name: 'King cormorant',
    type: 'Song',
    action: 'Stop',
    date: '01:44:55 25.12'
  },
  {
    name: 'Missing in Action',
    type: 'Movie',
    action: 'Stop',
    date: '21:03:55 25.04'
  },
  {
    name: 'Fitna',
    type: 'Song',
    action: 'Play',
    date: '22:33:25 01.08'
  },
  {
    name: 'Pheasant, ring-necked',
    type: 'Song',
    action: 'Stop',
    date: '00:27:13 15.10'
  },
  {
    name: 'Double Or Nothing',
    type: 'Movie',
    action: 'Stop',
    date: '110:27:53 24.10'
  },
  {
    name: 'Accident',
    type: 'Movie',
    action: 'Stop',
    date: '23:27:13 16.10'
  },
  {
    name: 'Dove, galapagos',
    type: 'Song',
    action: 'Stop',
    date: '11:17:33 08.01'
  }
]

export default defineComponent({
  name: 'HistoryPage',

  setup () {
    const $q = useQuasar()
    return {
      rows,
      columns,
      clicked: false,

      showNotif () {
        $q.notify({
          timeout: 20000,
          message: 'Playing: ',
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
  width: 600px
  max-height: 600px

.table
  display: flex
  flex-wrap: wrap
  justify-content: center
  width: 1000px
  height: 700px

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
</style>
