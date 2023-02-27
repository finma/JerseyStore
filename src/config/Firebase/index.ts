import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
require('firebase/compat/database');

firebase.initializeApp({
  apiKey: 'AIzaSyBm0kTSkVmKM4SIdyryu0GSY-3zamjPzK4',
  authDomain: 'jerseystore-270bc.firebaseapp.com',
  projectId: 'jerseystore-270bc',
  storageBucket: 'jerseystore-270bc.appspot.com',
  messagingSenderId: '613767990521',
  appId: '1:613767990521:web:a4100f39e6f3fbf3c1e628',
  measurementId: 'G-44SPK0DJXS',
});

const Firebase = firebase;

export default Firebase;
