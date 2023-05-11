import './App.scss';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Graphiql from './pages/Graphiql/Graphiql';
import { useAppDispatch } from './hook';
import { changeIsAuth, changeUser } from './store/userSlice';

const app = initializeApp({
  apiKey: 'AIzaSyCoLM6JMvoGKYI_rreQqVUSndfVKHZKBXg',
  authDomain: 'graphiql-b78c7.firebaseapp.com',
  projectId: 'graphiql-b78c7',
  storageBucket: 'graphiql-b78c7.appspot.com',
  messagingSenderId: '387427903221',
  appId: '1:387427903221:web:0f749726fd8fd663aac7bc',
});

const auth = getAuth(app);

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email } = user;
      dispatch(changeUser(email as string));
      dispatch(changeIsAuth(true));
    } else {
      dispatch(changeUser(''));
      dispatch(changeIsAuth(false));
    }
  });

  return (
    <HashRouter>
      <div className="app">
        <div className="headerBox">
          <Header />
        </div>
        <div className="contentBox">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/graphiql" element={<Graphiql />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <div className="footerBox">
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
