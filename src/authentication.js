import firebase from 'firebase';
import firebaseConfig from './firebase.js';

const db = firebase.app().firestore();


// Login code
document.querySelector("#btnLogin").addEventListener("click", () => {
    var email = document.querySelector("#txtEmail").value;
    var password = document.querySelector("#txtPassword").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(obj => {
        console.log("LOG IN SUCCESS", obj);
    }).catch(error => console.log(error));
});


// Logout code
document.querySelector("#btnLogout").addEventListener("click", () => {
    firebase.auth().signOut().then(obj => {
        alert("You have logged out");
    }, error => {
        console.log(error)
    });
});


// Login Check code
document.querySelector("#btnLoginCheck").addEventListener("click", () => {
    var user = firebase.auth().currentUser;
    if (user) {
        alert("You are currently logged in as " + user.email + ".");
    }
    else {
        alert("You are currently not logged in.")
    }
});


// Watch for authentication status changes
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("You just logged in");
    }
    else {
        console.log("You just logged out");
    }
});