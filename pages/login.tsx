import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../providers/AuthProvider";
import { providers } from "../config/firebase";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Meta } from "../components/sections";
import { SupportedAuthProvider } from "../types/auth";
import FormInput from "../components/forms/FormInput";

interface Data {
	email: string | null;
	password: string | null;
}

export default function Login() {
	const { user, login, loginWithProvider } = useAuth();
	const [provider, setProvider] = useState<SupportedAuthProvider>(null);
	const [data, setData] = useState<Data>({
		email: "",
		password: "",
	});
	const router = useRouter();

	useEffect(() => {
		if (user) router.replace("/");
	}, [user, router]);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			if (provider) {
				await loginWithProvider(provider);
			} else {
				await login(data.email, data.password);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-600 to-violet-800 grid place-items-center w-full">
			<Meta title="Login" />

			{/* Login Form */}
			<form
				onSubmit={handleLogin}
				className="flex flex-col items-center justify-center px-6 py-6 rounded-xl bg-gray-50 w-72 shadow-2xl shadow-zinc-900"
			>
				{/* Form Header */}
				<h1 className="text-4xl font-bold text-indigo-700 mb-10">Login</h1>

				{/* Text inputs */}
				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-col gap-4 w-full">
						<FormInput
							type="text"
							name="email"
							placeholder="Email Address"
							onInput={(e) => setData({ ...data, email: e.target.value })}
						/>
						<FormInput
							type="password"
							name="password"
							placeholder="Password"
							onInput={(e) => setData({ ...data, password: e.target.value })}
						/>
					</div>

					{/* Login with Email/Password button */}
					<div className="flex flex-col justify-between text-center mt-2">
						<button
							onClick={(e) => setProvider(null)}
							className="w-full py-2 text-center font-bold bg-indigo-500 text-gray-50 rounded-lg hover:bg-indigo-600 hover:text-white focus:ring focus:ring-indigo-600 focus:bg-indigo-700 ring-offset-2 ring-offset-gray-50 transition ease-in-out"
							type="submit"
						>
							Login
						</button>
						<p className="mt-3 text-xs text-gray-700 font-semibold">
							New user?{" "}
							<Link href="/signup">
								<a className="underline font-extrabold text-indigo-700 hover:text-indigo-900">
									Sign Up Here
								</a>
							</Link>
						</p>
					</div>
					<div className="flex flex-col gap-2 relative">
						<h2 className="text-center font-bold mb-2 before:h-1 before:bg-gray-300 before:w-2/5 before:inline-block before:absolute bg-gray-50 before:top-2.5 before:left-1 before:rounded-2xl after:h-1 after:bg-gray-300 after:w-2/5 after:inline-block after:absolute after:top-2.5 after:right-1 after:rounded-2xl">
							OR
						</h2>
						{/* Google Sign in */}
						<button
							onClick={(e) => setProvider(providers.google)}
							type="submit"
							className="block group w-full text-center bg-[#EA4335] hover:bg-[#DE3A2C]  focus:ring focus:ring-[#EA4335] focus:bg-[#D22D1F] ring-offset-2 ring-offset-gray-50 rounded-lg py-2 px-4 text-gray-50 font-bold hover:text-white transition ease-in-out disabled:opacity-50 text-md relative
							"
						>
							<FcGoogle
								fontSize={50}
								className="group-hover:bg-gray-200 group-hover:border-[#DE3A2C] bg-gray-50 border-2 border-[#EA4335] rounded-l-lg absolute top-0 left-0"
							/>
							Sign in with Google
						</button>
						{/* Facebook Sign in*/}
						<button
							onClick={(e) => setProvider(providers.facebook)}
							type="submit"
							className="block group w-full text-center bg-[#2F66DA] hover:bg-[#275FD1] rounded-lg py-2 px-4 text-gray-50 font-bold hover:text-white focus:ring focus:ring-[#2F66DA] focus:bg-[#1F59CA] ring-offset-2 ring-offset-gray-50 transition ease-in-out disabled:opacity-50 text-md rounded-l-lg relative"
						>
							<span className="ml-5">Sign in with Facebook</span>
							<FaFacebookF
								fontSize={50}
								className="fill-neutral-100 group-hover:fill-neutral-200 group-hover:border-[#275FD1] bg-[#38529A]  border-2 border-[#2F66DA] rounded-l-lg absolute top-0 left-0"
							/>
						</button>
						<div>
							{/* Twitter Sign in*/}
							<button
								disabled
								onClick={(e) => setProvider(providers.twitter)}
								type="submit"
								className="w-full bg-[#5F96FF] hover:bg-[#5A8Aff] rounded-lg py-2 px-4 text-gray-50 font-bold
								hover:text-white focus:ring focus:ring-[#5F96FF] focus:bg-[#5F8FFF] ring-offset-2 ring-offset-gray-50 transition ease-in-out disabled:opacity-50"
							>
								Sign in with Twitter
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
