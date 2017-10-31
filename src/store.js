import Vue from 'vue'
import Vuex from 'vuex'

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
        },
        userData(context) {
            context.commit('userData')
        }
    },

    mutations: {
        login(state) {
            state.userLogged = true
        },
        userData(state) {
            state.user = firebase.auth().currentUser
        }
    },

    getters: {
    }
})

export default store