import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { Meta } from "../components/sections";
import FormInput from "../components/forms/FormInput";

type Data = {
	displayName: string;
	email: string;
	password: string;
};

export default function Signup() {
	const { signup } = useAuth();
	const [data, setData] = useState<Data>({
		displayName: "",
		email: "",
		password: "",
	});
	const router = useRouter();

	const handleSignup = async (e) => {
		e.preventDefault();

		try {
			await signup(data.email, data.password, data.displayName);
			router.replace("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="h-screen bg-gradient-to-br from-indigo-600 to-violet-800 grid place-items-center w-full">
			<Meta title="Sign Up" />

			{/* Signup Form */}
			<form
				className="flex flex-col items-center justify-center px-6 py-12 rounded-xl bg-gray-50 w-80 shadow-2xl shadow-zinc-900"
				onSubmit={handleSignup}
			>
				{/* Form Header */}
				<h1 className="text-4xl font-bold text-indigo-700 mb-10">Sign Up</h1>

				{/* Text inputs */}
				<div className="flex flex-col gap-10 w-full">
					<div className="flex flex-col gap-4 w-full">
						{/* Display Name */}
						<FormInput
							type="text"
							name="display-name"
							placeholder="Display name"
							onInput={(e) => setData({ ...data, displayName: e.target.value })}
						/>

						{/* Email Address */}
						<FormInput
							type="text"
							name="email"
							placeholder="Email Address"
							onInput={(e) => setData({ ...data, email: e.target.value })}
						/>

						{/* Password */}
						<FormInput
							type="password"
							name="password"
							placeholder="Password"
							onInput={(e) => setData({ ...data, password: e.target.value })}
						/>

						{/* Buttons */}
					</div>
					<div className="flex flex-col justify-between text-center">
						<button
							className="w-full py-2 text-center font-bold bg-indigo-500 text-gray-50 rounded-lg hover:bg-indigo-600 hover:text-gray-50 focus:ring focus:ring-indigo-600 focus:bg-indigo-700 ring-offset-2 ring-offset-gray-50 transition ease-in-out"
							type="submit"
						>
							Create Account
						</button>
						<p className="mt-3 text-xs text-gray-700 font-semibold">
							Already have an account?{" "}
							<Link href="/login">
								<a className="underline font-extrabold text-indigo-700 hover:text-indigo-900">
									Log in
								</a>
							</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}
