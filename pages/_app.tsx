import type { AppProps } from "next/app";
import AuthProvider from "../providers/AuthProvider";
import { useRouter } from "next/router";
import ProtectedRoute from "../providers/ProtectedRoute";
import "../styles/globals.css";

const noAuthRequired = ["/login", "/signup"];

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<AuthProvider>
			{noAuthRequired.includes(router.pathname) ? (
				<Component {...pageProps} />
			) : (
				<ProtectedRoute>
					<Component {...pageProps} />
				</ProtectedRoute>
			)}
		</AuthProvider>
	);
}
