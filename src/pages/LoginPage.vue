<template>
  <q-page class="flex flex-center" style="background-color: #ececec;">
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
                  input-class="text-center"
                  bg-color="secondary"
                  filled
                  v-model="email"
                  label="Your email *"
                  :rules="[
                  val => !!val || '* Required ', isValidEmail
                  ]"
                  lazy-rules
                />

                <q-input
                  input-class="text-center"
                  bg-color="secondary"
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
                  <q-btn
                  label="Log In"
                  type="submit"
                  color="primary"
                  />
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
                input-class="text-center"
                bg-color="secondary"
                filled
                v-model="email"
                label="Your email *"
                :rules="[
                  val => !!val || '* Required ', isValidEmail
                  ]"
                lazy-rules
                />

                <q-input
                  input-class="text-center"
                  bg-color="secondary"
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

                <q-toggle v-model="accept" label="I accept the license and terms" />

                <div class="flex flex-center">
                  <q-btn
                  @click="$router.replace('/home')"
                  label="Register"
                  type="submit"
                  color="primary"
                  />
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
  name: 'LoginPage',
  setup () {
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
      tab: ref('login'),
      model: ''
    }
  },
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Invalid format'
    }
  }
})
</script>
