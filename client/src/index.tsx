import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';

initializeApp({
  apiKey: "AIzaSyDE-HjMTCBLVjO-BpI5cQiBS9fNk48xF5k",
  authDomain: "cs98-hackathing-1.firebaseapp.com",
  projectId: "cs98-hackathing-1",
  storageBucket: "cs98-hackathing-1.appspot.com",
  messagingSenderId: "750752646678",
  appId: "1:750752646678:web:73275e943c24019b931737"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
