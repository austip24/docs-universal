import React from "react";

interface SidebarItemProps {
	name?: string;
	Icon?: JSX.Element;
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
	const { name, Icon } = props;

	return (
		<div className="group flex items-center justify-left gap-4 pl-2 py-2 text-indigo-100 hover:bg-indigo-900 hover:text-gray-100 cursor-pointer hover:scale-110 transition ease-in-out duration-250">
			{Icon}
			<span className="font-bold">{name}</span>
		</div>
	);
};

export default SidebarItem;
