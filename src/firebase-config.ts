import { initializeApp } from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyD72SDtCMfY9W9vAYgkjmErQiRfHvdPgv4",
  authDomain: "graceland-80eab.firebaseapp.com",
  databaseURL: "https://graceland-80eab.firebaseio.com",
  projectId: "graceland-80eab",
  storageBucket: "graceland-80eab.appspot.com",
  messagingSenderId: "192040728044",
  appId: "1:192040728044:web:bc4b32ba06ef1326"
};
// Initialize Firebase
export let firebase = initializeApp(firebaseConfig)
