import '../styles/variables.css';
import '../styles/global.css';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import AppProvider from '../context/context';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AppProvider>
    <App />,
  </AppProvider>,
  // </React.StrictMode>,
);
