import Head from "next/head";
import React from "react";

interface MetaProps {
	title?: string;
}

export default function Meta(props: MetaProps) {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta content="IE=edge" />
			<meta property="og:title" content={props.title} key="title" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{props.title}</title>
		</Head>
	);
}
