<template>
  <q-page class="flex flex-center q-pa-md" style="background-color: #ececec;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="width: 600px">
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
            <q-tab name="login" label="Log In" />
            <q-tab name="register" label="Register" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
              <div class="text-h6 text-center" style="margin-bottom: 1em;">Log In</div>
              <div class="flex flex-center">
                <LoginComponent :tab="tab" />
              </div>
            </q-tab-panel>

            <q-tab-panel name="register">
              <div class="text-h6 text-center" style="margin-bottom: 1em;">Register</div>
              <div class="flex flex-center">
                <RegComponent :tab="tab"/>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import LoginComponent from 'components/LoginComponent'
import RegComponent from 'components/RegComponent'
export default {
  components: { LoginComponent, RegComponent },
  data () {
    return {
      tab: 'login'
    }
  }
}
</script>
