import { useEffect } from "react";
import { NextPage } from "next";
import { Footer, Meta } from "../components/sections";
import { useAuth } from "../providers/AuthProvider";

const Home: NextPage = () => {
	const { user, logout } = useAuth();

	// DEBUG
	// useEffect(() => {
	// 	console.log("User: ");
	// 	console.dir(user);
	// }, [user]);

	const handleLogout = async (e) => {
		await logout();
	};

	return (
		<div>
			<Meta title="Home" />
			<button
				className="px-4 py-2 bg-emerald-500 rounded text-gray-50"
				onClick={handleLogout}
			>
				Logout
			</button>
		</div>
	);
};

export default Home;
