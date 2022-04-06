import React from "react";
import Link from "next/link";

interface SidebarItemProps {
	name?: string;
	Icon?: JSX.Element;
	linkDestination?: string;
}

export default function SidebarItem(props: SidebarItemProps) {
	const { name, Icon, linkDestination } = props;

	return (
		<div className="group flex items-center justify-left gap-4 pl-2 py-2 text-indigo-100 hover:bg-indigo-800 hover:text-gray-100 focus:bg-green-500 rounded-lg cursor-pointer transition ease-in-out duration-250">
			<div className="">{Icon}</div>
			<span className="font-bold">{name}</span>
		</div>
	);
}
