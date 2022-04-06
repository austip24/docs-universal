import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user, router]);

	return <>{user ? children : null}</>;
}
