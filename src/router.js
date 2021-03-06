import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/login', component: load('Login') },
    { path: '/singup', component: load('SingUp') },
    { path: '/', component: load('Home') },
    { path: '/home', component: load('Home') },
    { path: '/maquillaje', component: load('Maquillaje') },
    { path: '/peluqueria', component: load('Peluqueria') },
    { path: '/manos', component: load('Manos') },
    { path: '/pies', component: load('Pies') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
