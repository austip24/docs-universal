import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";

type Props = {
	children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user, router]);

	return <>{user ? children : null}</>;
}
