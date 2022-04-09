import type { AppProps } from "next/app";
import AuthProvider from "../providers/AuthProvider";
import { useRouter } from "next/router";
import ProtectedRoute from "../providers/ProtectedRoute";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const noAuthRequired = ["/login", "/signup"];

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<AuthProvider>
			<Layout>
				{noAuthRequired.includes(router.pathname) ? (
					<Component {...pageProps} />
				) : (
					<ProtectedRoute>
						<Sidebar />
						<Component {...pageProps} />
					</ProtectedRoute>
				)}
			</Layout>
		</AuthProvider>
	);
}
