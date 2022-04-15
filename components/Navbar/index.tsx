import React from "react";
import { FaHome } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { GrDocumentText } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import Search from "./Search";
import Logo from "./Logo";
import Settings from "./Settings";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
	return (
		<div className="w-screen h-16 flex justify-between items-center bg-indigo-900 text-indigo-100">
			<Logo Icon={IoDocumentTextOutline} text="Docs" href="/" />
			<Search />
			<Settings />
		</div>
	);
};

export default Navbar;
