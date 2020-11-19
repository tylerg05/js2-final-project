import firebase from 'firebase';

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

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
// We'll need to explore using other components of firebase
// Note that we are just exporting the firsestore database