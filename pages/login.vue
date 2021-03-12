<template>
  <div>
    <form action="">
      <v-btn @click="login" class="mr-4" color="success">Login By Google</v-btn>
      <v-btn @click="logout" class="mr-4" color="error">Logout</v-btn>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebaseConfig.js'

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken
          console.log(accessToken)

          // The signed-in user info.
          var user = result.user
          console.log('User = ' + user)
          // ...
          //เปลี่ยนหน้าไป  index
          this.$router.replace('/')
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful')
        })
        .catch((error) => {
          // An error happened.
          console.log('An error happened')
        })
    },
  },
}
</script>
