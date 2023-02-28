import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const app = initializeApp({
  apiKey: 'AIzaSyBm0kTSkVmKM4SIdyryu0GSY-3zamjPzK4',
  authDomain: 'jerseystore-270bc.firebaseapp.com',
  projectId: 'jerseystore-270bc',
  storageBucket: 'jerseystore-270bc.appspot.com',
  messagingSenderId: '613767990521',
  appId: '1:613767990521:web:a4100f39e6f3fbf3c1e628',
  measurementId: 'G-44SPK0DJXS',
});

const auth = getAuth(app);
const database = getDatabase(app);

export {auth, database, signOut};
export default app;
