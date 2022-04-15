import React from "react";
import Link from "next/link";
import type { IconType } from "react-icons";

interface LogoProps {
	Icon: IconType;
	text: string;
	href: string;
}

const Logo: React.FC<LogoProps> = (props) => {
	const { Icon, text, href } = props;

	return (
		<Link href={href} passHref={true}>
			<div className="flex p-4 justify-center items-center gap-1 hover:text-gray-50 cursor-pointer">
				<Icon fontSize={40} className="" />
				<span className="font-semibold">{text}</span>
			</div>
		</Link>
	);
};

export default Logo;
