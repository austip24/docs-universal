// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyChv186_NxqJ9qQv_2suB44_gdni33xSVc",
	authDomain: "docs-universal.firebaseapp.com",
	projectId: "docs-universal",
	storageBucket: "docs-universal.appspot.com",
	messagingSenderId: "295276405931",
	appId: "1:295276405931:web:a4c8206a399b3ab01583ee",
	measurementId: "G-EQ6EJ2TCWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export interface SupportedAuthProviders
	extends GoogleAuthProvider,
		FacebookAuthProvider,
		TwitterAuthProvider {}

type Providers = {
	[key: string]: SupportedAuthProviders;
};

const providers: Providers = {
	google: new GoogleAuthProvider(),
	facebook: new FacebookAuthProvider(),
	twitter: new TwitterAuthProvider(),
};

export { db, auth, providers };
