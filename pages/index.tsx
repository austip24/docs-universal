import { Footer, Meta } from "../components/sections";
import { useAuth } from "../providers/AuthProvider";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
	const { user, logout } = useAuth();

	// DEBUG
	useEffect(() => {
		console.log("User: ");
		console.dir(user);
	}, [user]);

	const handleLogout = async (e) => {
		await logout();
	};

	return (
		<div>
			<Meta title="Home" />
			<Sidebar />
			<button
				className="px-4 py-2 bg-emerald-500 rounded text-gray-50"
				onClick={handleLogout}
			>
				Logout
			</button>
		</div>
	);
}
