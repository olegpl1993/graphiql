import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnTTxWvKYAbvoz0kdUXrhVK3TkmVTeFG8',
  authDomain: 'graphiql-aut-db.firebaseapp.com',
  projectId: 'graphiql-aut-db',
  storageBucket: 'graphiql-aut-db.appspot.com',
  messagingSenderId: '1062970047611',
  appId: '1:1062970047611:web:e35fe9e716175f640076de',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
