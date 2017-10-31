<template>
    <section>
        <div>
            <q-card class="bg-white">
                <q-card-title>
                    Bienvenido a <strong>{{ title }}</strong>
                </q-card-title>
                <q-card-main>
                    <p>Para crear una cuenta es necesario que ingreses tu usuario y tu mail</p>
                    <q-field icon="email">
                        <q-input placeholder="Mail" type="email" v-model="user.mail" />
                    </q-field>
                    <q-field icon="lock">
                        <q-input v-model="user.pass" type="password" placeholder="Constraseña" />
                    </q-field>
                    <q-btn color="purple" class="full-width" @click="createAccount()">Crear cuenta</q-btn>
                    <p class="text-right">
                        <router-link to="/login"><small>Ya tengo una cuenta, quiero ingresar</small></router-link>
                    </p>
                </q-card-main>
            </q-card>
            <div>User: {{userResponse}}</div>
            <div>Error: {{errorResponse}}</div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'

/* eslint-disable */
import {
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QField,
  QInput,
  QBtn
} from "quasar"
export default {
  name: "Login",
  components: {
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QField,
    QInput,
    QBtn
  },
  data() {
    return {
      user: {
        mail: "",
        pass: ""
      },
      userResponse: "",
      errorResponse: ""
    }
  },
  methods: {
      createAccount: function() {
          var self = this
          firebase.auth().createUserWithEmailAndPassword(this.user.mail, this.user.pass).then(
              function (user) {
                self.userResponse = user
              },
              function (error) {
                self.errorResponse = error
              }
          )
        //   this.$router.push('/home')
        //   this.$store.dispatch('login')
      }
  },
  computed: {
      ...mapState(['title']),
  }
};
</script>

<style>

</style>
