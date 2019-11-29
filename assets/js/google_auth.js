var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.me');

  function signup()
  {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
        console.log(errorMessage);
      // ...
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        window.location = 'signup.html'; //After successful login, user will be redirected to home.html
        
      }
      else {
        window.location = 'index.html'; // No user is signed in.
      }
    });
  }

  function logout() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location = 'index.html';

    }).catch(function(error) {
    // An error happened.
    });   
  }
  
