import {
	signInWithPopup,
	signInWithRedirect,
	signOut,
	GoogleAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useEffect, useCallback } from "react";

export default function Login() {
	const loginWithGoogle = useCallback(async () => {
		try {
			const result = await signInWithRedirect(auth, provider);
			console.log(result);
		} catch (error) {
			const credential = GoogleAuthProvider.credentialFromError(error);

			console.error(`
			Code: ${error.code}\n
			Message: ${error.message}\n
			Email: ${error.email}\n
			Credential: ${credential}`);
		}
	}, []);

	const handleSignOut = useCallback(async () => {
		try {
			const result = await signOut(auth);

			/** DEBUG **/
			// console.log(`User signed out!`);
			// console.log(result);
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		console.log(auth);
		console.log(provider);
	}, []);

	return (
		<div>
			<button
				onClick={loginWithGoogle}
				className="px-4 py-2 rounded bg-blue-500 text-gray-100"
			>
				Login with Google
			</button>
			<button
				onClick={handleSignOut}
				className="px-4 py-2 rounded bg-rose-500 text-gray-100"
			>
				Signout from Google
			</button>
		</div>
	);
}
