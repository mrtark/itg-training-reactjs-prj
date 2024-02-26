import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { FavoritesProvider } from './context/FavoritesContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <FavoritesProvider>
            <BrowserRouter> 
                   <App></App>
            </BrowserRouter>
      </FavoritesProvider>
);
//FavoritesProvider : global contet for providers
//BrowserRouter: rotalama işlemleri için

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<React.StrictMode><App></App></React.StrictMode>
reportWebVitals();
