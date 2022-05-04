import React from "react";

interface LayoutProps {
	children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <div className="flex bg-slate-900 min-h-screen">{children}</div>;
};

export default Layout;
