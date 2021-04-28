import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import  'firebase/storage';
import  'firebase/firestore';

//const firebase=require('firebase/app');
//require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyBHrRqdw0wl53-6yfXs6fNzWS7G1-AXIDQ",
  authDomain: "evernote-clone-f3053.firebaseapp.com",
  projectId: "evernote-clone-f3053",
  storageBucket: "evernote-clone-f3053.appspot.com",
  messagingSenderId: "557281058245",
  appId: "1:557281058245:web:7c839e92a0563fdeebffac"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
