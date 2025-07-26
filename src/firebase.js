import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVCnLbJ9TKpq2Bb139XmjNheu8uOard34",
  authDomain: "qverse-app-1a628.firebaseapp.com",
  projectId: "qverse-app-1a628",
  storageBucket: "qverse-app-1a628.firebasestorage.app",
  messagingSenderId: "208739490406",
  appId: "1:208739490406:web:df985079877c763207eba7",
  measurementId: "G-MVEF8QMJG2"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const analytics = getAnalytics(app);

export default app; 