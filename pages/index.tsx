import { NextPage } from "next";
import { Footer, Meta } from "../components/sections";
import { useAuth } from "../providers/AuthProvider";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	const { logout } = useAuth();

	const handleLogout = async (e) => {
		await logout();
	};

	return (
		<div>
			<Meta title="Home" />
			<Navbar />
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
