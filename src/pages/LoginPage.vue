<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="width: 600px">
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
            <q-tab name="login" label="Log In" />
            <q-tab name="register" label="Register" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
              <div class="text-h6 text-center">Log In</div>
              <div class="flex flex-center">

                <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
              >
                <q-input
                  filled
                  type="email"
                  v-model="email"
                  label="Your email *"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input
                  filled
                  type="password"
                  v-model="password"
                  label="Your password *"
                  :rules="[
                      val => !!val || '* Required',
                      val => val.length > 3 || 'Password too short',
                      val => val.length < 5 || 'Very long password'
                    ]"
                  lazy-rules
                />

                <div class="flex flex-center">
                  <q-btn label="Log In" type="submit" color="primary"/>
                </div>
              </q-form>

              </div>
            </q-tab-panel>

            <q-tab-panel name="register">
              <div class="text-h6 text-center">Register</div>
              <div class="flex flex-center">

                <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
              >
                <q-input
                  filled
                  type="email"
                  v-model="email2"
                  label="Your email *"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input
                  filled
                  type="password"
                  v-model="password2"
                  label="Your password *"
                  :rules="[
                      val => !!val || '* Required',
                      val => val.length > 3 || 'Password too short',
                      val => val.length < 5 || 'Very long password'
                    ]"
                  lazy-rules
                />

                <div class="flex flex-center">
                  <q-btn label="Log In" type="submit" color="primary"/>
                </div>
              </q-form>

              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

      </div>
    </div>

    <q-footer>
      <q-toolbar class="flex flex-center">

          <q-btn-dropdown color="secondary" label="Languages">
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
import { useQuasar } from 'quasar'

export function validateEmail (email) {
  const reg = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
  if (!reg.test(email)) return false
  return true
}

export default defineComponent({
  name: 'LoginPage',
  setup () {
    const $q = useQuasar()
    const email = ref(null)
    const password = ref(null)
    const accept = ref(false)
    const email2 = ref(null)
    const password2 = ref(null)
    return {
      email,
      password,
      accept,
      email2,
      password2,
      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      },
      tab: ref('login')
    }
  }
})
</script>
