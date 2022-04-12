import React, { useState, useCallback } from "react";
import { useEffect, useContext, createContext } from "react";
import { auth } from "../config/firebase";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { User, SupportedAuthProvider, AuthContextType } from "../types/auth";

const AuthContext = createContext<AuthContextType>({});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	// create a new account
	const signup = useCallback(
		async (email: string, password: string, displayName: string) => {
			await createUserWithEmailAndPassword(auth, email, password);
			return await updateProfile(auth.currentUser, { displayName });
		},
		[]
	);

	// general email/password login provider (not google, facebook, or twitter)
	const login = useCallback(async (email: string, password: string) => {
		return await signInWithEmailAndPassword(auth, email, password);
	}, []);

	// login with a specified provider
	const loginWithProvider = useCallback(
		async (provider: SupportedAuthProvider) => {
			return await signInWithPopup(auth, provider);
		},
		[]
	);

	// user logout
	const logout = useCallback(async () => {
		setUser(null);
		await signOut(auth);
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, signup, login, loginWithProvider, logout }}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
