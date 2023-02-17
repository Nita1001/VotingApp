import { useState, useEffect } from 'react';

import { PAGES } from './constants';

import { Login, Main } from './pages';

import './styles/App.css';

function App() {
  const [page, setPage] = useState('login');
  const [login, main] = PAGES;

  return (
   

        <Main></Main>

        // <Login></Login>

  );
}

export default App;
