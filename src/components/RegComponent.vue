<template>
    <q-form @submit="submitForm">
      <q-input
        v-model="formData.email"
        input-class="text-center"
        bg-color="secondary"
        outlined
        class="q-mb-md"
        type="email"
        placeholder="Your email *"
        :rules="[
          val => !!val || '* Required ', isValidEmail
        ]"
        lazy-rules />
      <q-input
        v-model="formData.password"
        input-class="text-center"
        bg-color="secondary"
        outlined
        class="q-mb-md"
        type="password"
        placeholder="Your password *"
        :rules="[
          val => !!val || '* Required',
          val => val.length > 5 || 'Password too short',
          val => val.length < 7 || 'Very long password'
        ]"
        lazy-rules />
      <div class="flex flex-center" style="margin-top: 2em;">
        <q-btn
          type="submit"
          color="accent"
          :label="tab"
          :disabled="isDisabled"
        />
      </div>
    </q-form>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
export default {
  name: 'RegComponent',
  props: ['tab'],
  data () {
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Invalid format'
    },
    submitForm () {
      if (this.tab === 'login') {
        this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },
    createUser (email, password) {
      console.log(email, password)
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(auth => {
          this.$router.push('/home')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
