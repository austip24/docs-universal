import React, { useState, useCallback } from "react";
import { useEffect, useContext, createContext } from "react";
import { auth, providers } from "../config/firebase";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	UserCredential,
	signInWithRedirect,
	getRedirectResult,
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";

interface SupportedAuthProvider
	extends GoogleAuthProvider,
		FacebookAuthProvider,
		TwitterAuthProvider {}

type RedirectCallback = () => Promise<boolean>;

export type User = {
	uid?: string | null;
	email?: string | null;
	displayName?: string | null;
};

export type AuthContextType = {
	user?: User;
	signup?: (email: string, password: string) => Promise<UserCredential>;
	login?: (email?: string, password?: string) => Promise<UserCredential>;
	loginWithProvider?: (
		provider: SupportedAuthProvider
	) => Promise<UserCredential>;
	logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({});

export const useAuth = () => useContext(AuthContext);

type Props = {
	children: React.ReactNode;
};

/**
 * Wrapper component for authentication
 */

export default function AuthProvider({ children }: Props) {
	const [user, setUser] = useState<User>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	// create a new account
	const signup = useCallback(async (email: string, password: string) => {
		return await createUserWithEmailAndPassword(auth, email, password);
	}, []);

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
}
