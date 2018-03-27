// FireBase script to add to html
/* <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script> */

// ===========================Initialize FireBase===========================
var config = {
    apiKey: "AIzaSyDwsEKJrFnanQ1pW5X6DoQcB7aGjHBZvUg",
    authDomain: "recipe-master-7f905.firebaseapp.com",
    databaseURL: "https://recipe-master-7f905.firebaseio.com",
    projectId: "recipe-master-7f905",
    storageBucket: "recipe-master-7f905.appspot.com",
    messagingSenderId: "345236552850"
};

firebase.initializeApp(config);

var database = firebase.database();

// Global variables
var userName = "";
var password = "";
var email = "";

// ===========================User Account Management===========================

// NEED: Function to house account creation section
$("#submit").on("click", function (event) {
    event.preventDefault();
    // variables to capture user email and password inputs for use in the createUser method
    userName = $("#name").val().trim();
    password = $("#reenter-password").val().trim();
    email = $("#email").val().trim();

    console.log(userName);
    console.log(password);
    console.log(email);

    // Check that password entries match and are correct length
    if ($("#password").val().trim() != $("#reenter-password").val().trim()) {
        alert('Passwords do not match.');
        return;
    }

    // createUser method to be linked to account creation form in html
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // Add error if password doesn't meet our specifications
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
    // close account creation section===========================
});

// NEED: Create onClick function to house account login section
$("#signIn").on("click", function (event) {
    // variables to capture user email and password inputs for use in the signIn method
    email = $("#email").val().trim();
    password = $("#password").val().trim();
    console.log(email);
    console.log(password);

    // signIn method to be linked to account login form in html
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log("Logged in!")
        // ...
    });
    // close account login section===========================
});

// NEED: Create onClick function to signOut
$("#signOut").on("click", function (event) {
    firebase.auth().signOut().then(function () {
        console.log("Logged out!")
    }, function (error) {
        console.log(error.code);
        console.log(error.message);
    });
    // close signOut section===========================
});

// NEED: Function to setup UI event listeners and register Firebase auth listeners
function authListen() {
    // Listen for changes to auth state
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            // User is signed in
            var userName = user.userName;
            var email = user.email;
            var uid = user.uid;

        } else {
            // User is signed out
        }

    });
}
// Initialize UI event listener function
window.onload = function () {
    authListen();
    // close auth state listener section===========================
};
