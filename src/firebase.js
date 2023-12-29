// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB188My79gKo6tZbs3Kzv34DYu8LgESjB0',
  authDomain: 'my-gallery-demo.firebaseapp.com',
  projectId: 'my-gallery-demo',
  storageBucket: 'my-gallery-demo.appspot.com',
  messagingSenderId: '393598296979',
  appId: '1:393598296979:web:bd5a1c46a6d9af4229be66',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export default firebaseApp;

