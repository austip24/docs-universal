import React from "react";

interface FormInputProps {
	type: string;
	name: string;
	placeholder: string;
	onInput: (e: any) => void;
}

const FormInput: React.FC<FormInputProps> = (props) => {
	return (
		<div className="relative">
			<input
				id={props.name}
				name={props.name}
				className="peer w-full bg-gray-50 border-0 border-b-2 border-b-gray-400 focus:ring-0 focus:outline-0 focus:border-b-indigo-700 focus:bg-indigo-100 placeholder:text-transparent placeholder:select-none text-sm transition ease-in-out rounded-t-md"
				type={props.type}
				placeholder={props.placeholder}
				onInput={props.onInput}
			/>
			<label
				htmlFor={props.name}
				className="absolute -top-2.5 left-3 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 select-none peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all duration-250 text-gray-900 cursor-text"
			>
				{props.placeholder}
			</label>
		</div>
	);
};

export default FormInput;
