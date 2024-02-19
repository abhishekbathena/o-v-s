import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyDQSKSFaOmhx-V3p_ngwbD_HeBRp8GVkAY",
    authDomain: "phone-44975.firebaseapp.com",
    projectId: "phone-44975",
    storageBucket: "phone-44975.appspot.com",
    messagingSenderId: "85173111847",
    appId: "1:85173111847:web:5d934703fde7c63fd59202"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export default authentication;