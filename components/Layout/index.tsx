import React from "react";

interface LayoutProps {
	children: React.ReactElement;
}

export default function Layout(props: LayoutProps) {
	return <div className="flex">{props.children}</div>;
}
