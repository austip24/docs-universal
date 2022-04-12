import React from "react";

interface LayoutProps {
	children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = (props) => {
	return <div className="flex">{props.children}</div>;
};

export default Layout;
