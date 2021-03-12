<template>
  <v-row>
    <v-col class="text-center">
      <img
        :src=" photoUrl"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash; {{name}} {{email}} </em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script>
import firebase from 'firebase/app'
export default {
data(){
  return {
      name : '',
  email : '',
  photoUrl : '',
  }
},
  
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
          this.name = user.displayName;
          this.email = user.email;
          this.photoUrl = user.photoURL;

      } else {
         ihis.$router.replace('/iogin')
      }
    })
  },
}
</script>
