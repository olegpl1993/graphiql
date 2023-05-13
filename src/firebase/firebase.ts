import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCoLM6JMvoGKYI_rreQqVUSndfVKHZKBXg',
  authDomain: 'graphiql-b78c7.firebaseapp.com',
  projectId: 'graphiql-b78c7',
  storageBucket: 'graphiql-b78c7.appspot.com',
  messagingSenderId: '387427903221',
  appId: '1:387427903221:web:0f749726fd8fd663aac7bc',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
