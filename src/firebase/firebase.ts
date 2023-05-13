import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: 'AIzaSyCoLM6JMvoGKYI_rreQqVUSndfVKHZKBXg',
  authDomain: 'graphiql-b78c7.firebaseapp.com',
  projectId: 'graphiql-b78c7',
  storageBucket: 'graphiql-b78c7.appspot.com',
  messagingSenderId: '387427903221',
  appId: '1:387427903221:web:0f749726fd8fd663aac7bc',
});
const auth = getAuth(app);

export default auth;
