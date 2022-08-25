import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {Auth0Provider}from "@auth0/auth0-react"
import { CategoriesContextProvider } from './Context/CategoriesContext';
import { BlogsContextProvider } from './Context/BlogsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-rw1fts48.us.auth0.com"
  clientId="EZGWj3ZIOPZo8n3gZStEEf4JR1kjlfsd"
  redirectUri={window.location.origin}
    // audience="https://dev-rw1fts48.us.auth0.com/api/v2/"
    // scope="read:current_user update:current_user_metadata"
  >
    <CategoriesContextProvider>
    <BlogsContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </BlogsContextProvider>
    </CategoriesContextProvider>
  </Auth0Provider>
);

