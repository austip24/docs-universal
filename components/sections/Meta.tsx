import Head from "next/head";
import React from "react";

interface MetaProps {
	children?: React.ReactNode;
	title?: string;
}

export default function Meta(props: MetaProps) {
	const { title } = props;

	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content={title} key="title" />

			{/* Add page title */}
			{title ? (
				<>
					<meta property="og:title" content={title} key="title" />
					<title>{title}</title>
				</>
			) : (
				<>
					<meta property="og:title" content="Default Title" key="title" />
					<title>Default Title</title>
				</>
			)}

			{/* Any other tags you want to include */}
			{props.children}
		</Head>
	);
}
