import React, { useState, useCallback } from "react";
import { useEffect, useContext, createContext } from "react";
import { auth } from "../config/firebase";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	UserCredential,
} from "firebase/auth";

export type User = {
	uid?: string | null;
	email?: string | null;
	displayName?: string | null;
};

export type AuthContextType = {
	user?: User;
	signup?: (email: string, password: string) => Promise<UserCredential>;
	login?: (email: string, password: string) => Promise<UserCredential>;
	logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({});

export const useAuth = () => useContext(AuthContext);

type ProviderProps = {
	children: React.ReactNode;
};

/**
 * Wrapper component for authentication
 */

export function AuthProvider({ children }: ProviderProps) {
	const [user, setUser] = useState<User>(null);
	const [loading, setLoading] = useState<boolean>(true);

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

	const signup = useCallback(async (email: string, password: string) => {
		return await createUserWithEmailAndPassword(auth, email, password);
	}, []);

	const login = useCallback(async (email: string, password: string) => {
		return await signInWithEmailAndPassword(auth, email, password);
	}, []);

	const logout = useCallback(async () => {
		setUser(null);
		await signOut(auth);
	}, []);

	return (
		<AuthContext.Provider value={{ user, signup, login, logout }}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
}
