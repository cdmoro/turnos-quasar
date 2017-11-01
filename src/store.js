import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

/* eslint-disable */
const store = new Vuex.Store({
    state: {
        title: 'Tu look!',
        userLogged: false,
        filterList: false,
        user: {}
    },
    actions: {
        login(context) {
            context.commit('login')
        },
        toggleFilterList(context) {
            context.commit('toggleFilterList')
        }
    },

    mutations: {
        login(state) {
            state.userLogged = true
            state.user = firebase.auth().currentUser
        },
        toggleFilterList(state) {
            state.filterList = !state.filterList
        }
    },

    getters: {
    }
})

export default store