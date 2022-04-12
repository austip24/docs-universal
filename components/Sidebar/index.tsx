import React from "react";
import SidebarItem from "./SidebarItem";
import { FaHome } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
	return (
		<div className="flex flex-col min-h-screen w-40 bg-slate-900 p-2 gap-1 divide-indigo-700">
			<Link href="/">
				<a>
					<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
				</a>
			</Link>

			<Link href="/document">
				<a>
					<SidebarItem
						Icon={<IoDocumentText fontSize={30} />}
						name="Documents"
					/>
				</a>
			</Link>
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
			<SidebarItem Icon={<FaHome fontSize={30} />} name="Home" />
		</div>
	);
};

export default Sidebar;
