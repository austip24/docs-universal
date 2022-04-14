import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	TwitterAuthProvider,
	UserCredential,
} from "firebase/auth";

// what information should be obtained about user from login
export interface User {
	uid?: string | null;
	email?: string | null;
	displayName?: string | null;
	photoURL?: string | null;
}

export interface SupportedAuthProvider
	extends GoogleAuthProvider,
		FacebookAuthProvider,
		TwitterAuthProvider {}

export interface AuthContextType {
	user?: User;
	signup?: (
		email: string,
		password: string,
		displayName: string
	) => Promise<void>;
	loginWithEmailAndPassword?: (email?: string, password?: string) => Promise<UserCredential>;
	loginWithProvider?: (
		provider: SupportedAuthProvider
	) => Promise<UserCredential>;
	logout?: () => Promise<void>;
}
