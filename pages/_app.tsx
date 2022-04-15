import React from "react";
import type { AppProps } from "next/app";
import AuthProvider from "../providers/AuthProvider";
import { useRouter } from "next/router";
import ProtectedRoute from "../providers/ProtectedRoute";
import "../styles/globals.css";
import Layout from "../components/Layout";

const noAuthRequired = ["/login", "/signup"];

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();

	return (
		<AuthProvider>
			<Layout>
				{noAuthRequired.includes(router.pathname) ? (
					<Component {...pageProps} />
				) : (
					<ProtectedRoute>
						<Component {...pageProps} />
					</ProtectedRoute>
				)}
			</Layout>
		</AuthProvider>
	);
};

export default MyApp;
