<template>
  <section>
    <q-slide-transition>
      <q-toolbar color="pink" style="min-height: auto; position: sticky; top: 44px; z-index: 200" v-show="filterList">
        <q-search placeholder="Buscar..." inverted color="pink" flat v-model="filter" style="box-shadow: none"/>
      </q-toolbar>
    </q-slide-transition>
    <q-list highlight inset-separator link>
      <template v-for="(turno, i) in filteredItems">
        <q-item :key="i">
          <q-item-side>
            <q-icon name="account_circle" size="2rem"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{turno.name}}</q-item-tile>
            <q-item-tile sublabel lines="1">{{turno.address}}</q-item-tile>
            <q-item-tile sublabel>
              <!-- <q-icon name="star" color="warning"/> -->
              <q-rating readonly color="warning" v-model="turno.index" :max="5" />
              <small>{{turno.index}}/5</small>
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile ref="target" icon="more_vert">
                <q-popover ref="popover" :fit="true" anchor="bottom right" self="top right">
                  <!--
                    The DOM element(s) that make up the popup,
                    in this case a list:
                  -->
                  <q-list item-separator link>
                    <q-item @click="dialogConfirm.handler(), $refs.popover[i].close()">
                      ¡Reservar turno!
                    </q-item>
                    <q-item @click="$refs.popover[i].close()">Detalles</q-item>
                  </q-list>
                </q-popover>
            </q-item-tile>
          </q-item-side>
        </q-item>
        <!-- <q-item-separator /> -->
      </template>
      <q-inner-loading :visible="turnos.length == 0">
        <q-spinner-dots color="pink" size="56px"></q-spinner-dots>
        <p class="text-tertiary">Cargando profesionales...</p>
      </q-inner-loading>
    </q-list>
  </section>
</template>

<script>
import db from '@/datasource.js'
import { mapState } from 'vuex'

import {QSlideTransition, QToolbar, QSearch, Dialog, QIcon, QList, QItem, QItemSeparator, QItemSide, QItemMain, QItemTile, QPopover, QRating, QInnerLoading, QSpinnerDots} from 'quasar'
export default {
  name: 'Home',
  components: {QSlideTransition, QToolbar, QSearch, QIcon, QList, QItem, QItemSeparator, QItemSide, QItemMain, QItemTile, QPopover, QRating, QInnerLoading, QSpinnerDots},
  data () {
    return {
      colores: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'],
      filter: '',
      dialogConfirm: {
        label: 'Confirmar turno',
        handler () {
          Dialog.create({
            title: 'Confirmar turno',
            message: 'El horario más próximo es a las 18 horas',
            buttons: [
              {
                label: 'Cancelar'
              },
              {
                label: 'Reservar'
              }
            ]
          })
        }
      }
    }
  },
  firebase: {
    turnos: db.ref('turnos')
  },
  computed: {
    ...mapState(['filterList']),
    filteredItems () {
      // return this.turnos
      return this.turnos.filter(item => {
        return item.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1
      })
    }
  },
  methods: {
    getColor: function () {
      return this.colores[Math.floor(Math.random() * this.colores.length)] + '-5'
    }
  }
}
</script>

<style>
</style>