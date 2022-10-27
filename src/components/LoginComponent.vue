<template>
    <q-form @submit="submitForm">
      <q-input
        v-model="formData.email"
        input-class="text-center"
        bg-color="secondary"
        outlined
        class="q-mb-md"
        type="email"
        placeholder="Your email *" />
      <q-input
        v-model="formData.password"
        input-class="text-center"
        bg-color="secondary"
        outlined
        class="q-mb-md"
        type="password"
        placeholder="Your password *" />
      <div class="flex flex-center" style="margin-top: 2em;">
        <q-btn
          type="submit"
          color="accent"
          :label="tab"
        />
      </div>
    </q-form>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
export default {
  name: 'LoginComponent',
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
    submitForm () {
      if (this.tab === 'login') {
        this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },
    signInExistingUser (email, password) {
      console.log(email, password)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.$router.push('/home')
        })
        .catch(error => {
          console.log(error)
          this.$q.notify({ message: 'Wrong credentials.' })
        })
    }
  }
}
</script>

<style scoped>
</style>
