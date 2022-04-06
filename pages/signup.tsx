import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { Meta } from "../components/sections";

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
		<div className="h-screen bg-gradient-to-br from-indigo-600 to-violet-800 grid place-items-center">
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
						<div className="relative">
							<input
								id="display-name"
								name="display-name"
								className="peer w-full bg-gray-50 border-0 border-b-2 border-b-gray-400 focus:ring-0 focus:outline-0 focus:border-b-indigo-700 focus:bg-indigo-100 placeholder:text-transparent text-sm transition ease-in-out rounded-t-md"
								type="text"
								placeholder="Display Name"
								onChange={(e) =>
									setData({ ...data, displayName: e.target.value })
								}
							/>
							<label
								htmlFor="display-name"
								className="absolute -top-2.5 left-3 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
								peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all duration-250 text-gray-900"
							>
								Display Name
							</label>
						</div>

						{/* Email Address */}
						<div className="relative">
							<input
								id="email"
								name="email"
								className="peer w-full bg-gray-50 border-0 border-b-2 border-b-gray-400 focus:ring-0 focus:outline-0 focus:border-b-indigo-700 focus:bg-indigo-100 placeholder:text-transparent text-sm transition ease-in-out rounded-t-md"
								type="text"
								placeholder="Email Address"
								onChange={(e) => setData({ ...data, email: e.target.value })}
							/>
							<label
								htmlFor="email"
								className="absolute -top-2.5 left-3 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
								peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all duration-250 text-gray-900"
							>
								Email Address
							</label>
						</div>

						{/* Password */}
						<div className="relative">
							<input
								id="password"
								name="password"
								className="peer w-full bg-gray-50 border-0 border-b-2 border-b-gray-400 focus:ring-0 focus:outline-0 focus:border-b-indigo-700 focus:bg-indigo-100 placeholder:text-transparent text-sm transition ease-in-out rounded-t-md"
								type="password"
								placeholder="Password"
								onChange={(e) => setData({ ...data, password: e.target.value })}
							/>
							<label
								htmlFor="password"
								className="absolute -top-2.5 left-3 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
								peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all duration-250 text-gray-900"
							>
								Password
							</label>
						</div>
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
