<template>
    <section>
        <div>
            <q-card class="bg-white">
                <q-card-title>
                    Bienvenido a <strong>Tu look!</strong>
                </q-card-title>
                <q-card-main>
                    <p>Para comenzar tenés que estar registrado</p>
                    <q-field icon="email">
                        <q-input placeholder="Mail" type="mail" v-model="user.mail" />
                    </q-field>
                    <q-field icon="lock">
                        <q-input v-model="user.pass" type="password" float-label="Constraseña" />
                    </q-field>
                    <q-btn color="purple" class="full-width" @click="login()">Ingresá</q-btn>
                    <p class="text-right">
                        <small>No tengo cuenta, quiero registarme</small>
                    </p>
                </q-card-main>
            </q-card>
            <q-card flat>
                <q-card-main>
                    <p class="text-white">Si no querés registrarte podés acceder con los siguientes servicios</p>
                    <div class="row sm-gutter">
                        <div class="col">
                            <q-btn icon="fa-google" color="red" class="full-width">Google</q-btn>
                        </div>
                        <div class="col">
                            <q-btn icon="fa-facebook-official" color="primary" class="full-width">Facebook</q-btn>
                        </div>
                    </div>
                </q-card-main>
            </q-card>
        </div>
    </section>
</template>

<script>
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
      }
    }
  },
  methods: {
      login: function() {
          this.$router.push('/home')
      }
  }
};
</script>

<style>

</style>
