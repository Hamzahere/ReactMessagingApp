import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwi057OjfoCTxYJg9IcSsF5tCIM-y4Elk",
    authDomain: "messaging-app-f853f.firebaseapp.com",
    databaseURL: "https://messaging-app-f853f.firebaseio.com",
    projectId: "messaging-app-f853f",
    storageBucket: "messaging-app-f853f.appspot.com",
    messagingSenderId: "386377194285",
    appId: "1:386377194285:web:034ac62acc154eefac91a4",
    measurementId: "G-TJYNTXNQJ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
