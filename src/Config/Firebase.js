import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDS29EMTWri4rQpj5jyHEPiKaln7qi1ydc",
    authDomain: "react-app-22fd8.firebaseapp.com",
    databaseURL: "https://react-app-22fd8.firebaseio.com",
    projectId: "react-app-22fd8",
    storageBucket: "react-app-22fd8.appspot.com",
    messagingSenderId: "751046873967",
    appId: "1:751046873967:web:1e301015414e5d69c60e9a"
  };

  const Firebase = firebase.initializeApp(firebaseConfig);

  export default firebase;