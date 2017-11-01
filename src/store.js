import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({
    state: {
        title: 'Tu look!',
        userLogged: false,
        user: {}
    },
    actions: {
        login(context) {
            context.commit('login')
        }
    },

    mutations: {
        login(state) {
            state.userLogged = true
            state.user = firebase.auth().currentUser
        }
    },

    getters: {
    }
})

export default store