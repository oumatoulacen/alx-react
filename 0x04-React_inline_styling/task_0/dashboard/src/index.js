import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <App isLoggedIn/>
  </React.StrictMode>,
  document.getElementById('root')
);
