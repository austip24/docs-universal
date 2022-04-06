import React from "react";
import SidebarItem from "./SidebarItem";
import { FaHome } from "react-icons/fa";

interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
	return (
		<div className="flex flex-col min-h-screen w-40 bg-slate-900 p-2 gap-1 divide-indigo-700">
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
		</div>
	);
}
