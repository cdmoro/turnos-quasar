import firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyC-B5IF-cWxs1xgJPDeSpng_kxZkF41zzE',
  authDomain: 'turnos-moda.firebaseapp.com',
  databaseURL: 'https://turnos-moda.firebaseio.com',
  projectId: 'turnos-moda',
  storageBucket: 'turnos-moda.appspot.com',
  messagingSenderId: '126487130944'
}

let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

firebase.auth().languageCode = 'es'

export default db
