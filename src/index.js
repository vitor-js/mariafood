import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './home';

import Provider from './provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  
  </React.StrictMode>
);
