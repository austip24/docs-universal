import React from "react";

interface SearchProps {}

const Search: React.FC<SearchProps> = (props) => {
	return (
		<div className="w-1/2">
			<input
				type="search"
				placeholder="Search..."
				className="w-full rounded-lg bg-indigo-100 focus:bg-indigo-200 text-gray-900 border-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-600 text-md"
			/>
		</div>
	);
};

export default Search;
