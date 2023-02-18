import { useState, useEffect } from 'react';

import { PAGES } from './constants';

import { Login, Main } from './pages';

import './styles/App.css';
const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

function App() {
  const [page, setPage] = useState('login');
  const [login, main] = PAGES;

    useEffect(() => {
      if (!userData) {
        setPage(login);
      } else {
        setPage(main);
      }
    }, [login, main]);
  
    switch (page) {
      case login:
        return <Login setPage={setPage} />;
      case main:
        return <Main setPage={setPage} />;
      default:
        return <Login setPage={setPage} />;
    }
  
}

export default App;
