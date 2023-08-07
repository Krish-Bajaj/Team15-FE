import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-lxe5tr51b6l2yaeh.au.auth0.com"
    clientId="YRNeeC7OaT00TL5s1C6nAbasDmW7RJVq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
  </Auth0Provider>,
);
