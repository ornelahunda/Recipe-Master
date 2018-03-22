// FireBase script to add to html
{/* <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script> */}

// ===========================Initialize FireBase===========================
var config = {
    apiKey: "AIzaSyDwsEKJrFnanQ1pW5X6DoQcB7aGjHBZvUg",
    authDomain: "recipe-master-7f905.firebaseapp.com",
    databaseURL: "https://recipe-master-7f905.firebaseio.com",
    storageBucket: "recipe-master-7f905.appspot.com"
  };

  firebase.initializeApp(config);

var database = firebase.database();

// ===========================User Account Management===========================

// NEED: Create onClick function to house account creation section 
    // variables to capture user email and password inputs for use in the createUser method

    // createUser method to be linked to account creation form in html
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // Add error if password doesn't meet our specifications
    });

// close account creation section===========================

// NEED: Create onClick function to house account login section 
    // variables to capture user email and password inputs for use in the signIn method

    // signIn method to be linked to account login form in html
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

// close account login section===========================

