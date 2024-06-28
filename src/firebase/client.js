import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyClAm8qYBed5Pp0TDLgm0_WSBANIREz5Pw",
    authDomain: "proyecto-react-2222f.firebaseapp.com",
    projectId: "proyecto-react-2222f",
    storageBucket: "proyecto-react-2222f.appspot.com",
    messagingSenderId: "363798376483",
    appId: "1:363798376483:web:bf0c60b56fc94c6e16c196"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)