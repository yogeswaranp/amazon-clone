// //   import firebase from "firebase"
//    import firebase from 'firebase/compat/app';
//    import 'firebase/compat/auth';
// //   import 'firebase/compat/firestore';
// //    import { initializeApp } from "firebase/app";



//   const firebaseApp = firebase.initiallizeApp({
//       apiKey: "AIzaSyCgjETXicGTLtpfS3bK64E1SA-uGdZpGFc",
//      authDomain: "clone-58047.firebaseapp.com",
//       projectId: "clone-58047",
//       storageBucket: "clone-58047.appspot.com",
//       messagingSenderId: "533611779229",
//       appId: "1:533611779229:web:5c9b9970e738f0c8807074",
//       measurementId: "G-9CB434C17J"
//   });

//   const auth= firebaseApp.auth();
//   export  {auth};


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgjETXicGTLtpfS3bK64E1SA-uGdZpGFc",
    authDomain: "clone-58047.firebaseapp.com",
    projectId: "clone-58047",
    storageBucket: "clone-58047.appspot.com",
    messagingSenderId: "533611779229",
    appId: "1:533611779229:web:5c9b9970e738f0c8807074",
    measurementId: "G-9CB434C17J"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { auth, db };
