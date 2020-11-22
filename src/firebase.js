import firebase from 'firebase';
// import store from "./store";

var firebaseConfig = {
    apiKey: "AIzaSyBFS-XJmuGAOxpY09rmE-qvVZJ4OoIWpXk",
    authDomain: "final-project-71640.firebaseapp.com",
    databaseURL: "https://final-project-71640.firebaseio.com",
    projectId: "final-project-71640",
    storageBucket: "final-project-71640.appspot.com",
    messagingSenderId: "236576841509",
    appId: "1:236576841509:web:3cfa4d2e7ac51c305fc4cc",
    measurementId: "G-C5ZNKWH33W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export const musiciansCollection = db.collection('musicians');
export const bandsCollection = db.collection('preselectedBands');
export const reservationsCollection = db.collection('reservations');

export default {
  db,
  auth,
  firebaseApp,
  musiciansCollection,
  bandsCollection,
  reservationsCollection
};