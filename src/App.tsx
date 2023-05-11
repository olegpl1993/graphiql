import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Graphiql from './pages/Graphiql/Graphiql';
import { useAppDispatch, useAppSelector } from './hook';
import { changeIsAuth, changeUser } from './store/userSlice';
import PrivateRoute from './PrivateRoute';
import auth from './firebase';

function App() {
  const isAuth = useAppSelector((state) => state.userState.isAuth);
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
    <div className="app">

      <div className="headerBox">
        <Header />
      </div>

      <div className="contentBox">
        <Routes>
          <Route element={<PrivateRoute auth={isAuth} />}>
            <Route path="/graphiql" element={<Graphiql />} />
          </Route>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <div className="footerBox">
        <Footer />
      </div>

    </div>
  );
}

export default App;
