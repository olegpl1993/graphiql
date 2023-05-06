import './App.scss';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import store from './store/store';
import Graphiql from './pages/Graphiql/Graphiql';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
