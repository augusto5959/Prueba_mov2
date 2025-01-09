// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCpRz1zXh1QDvf2qOb2gdqfmNocHORkI8o',
	authDomain: 'app-prueba-ff7f0.firebaseapp.com',
	databaseURL: 'https://app-prueba-ff7f0-default-rtdb.firebaseio.com',
	projectId: 'app-prueba-ff7f0',
	storageBucket: 'app-prueba-ff7f0.firebasestorage.app',
	messagingSenderId: '641320616883',
	appId: '1:641320616883:web:0543546009cc4b087181c6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
