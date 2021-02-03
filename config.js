import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD1zSVibXY2u1qSP-hOQ5IsSIgU-hGNEe8",
  authDomain: "wireless-library-16936.firebaseapp.com",
  projectId: "wireless-library-16936",
  databaseURL: "wireless-library-16936.firebaseio.com",
  storageBucket: "wireless-library-16936.appspot.com",
  messagingSenderId: "71835878785",
  appId: "1:71835878785:web:357e32b3398ba262e49480"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  export default db;

