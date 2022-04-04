// import { auth, provider } from "../config/firebase";
import { useAuth } from "../providers/AuthProvider";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Data = {
	email: string | null;
	password: string | null;
};

export default function Login() {
	const { user, login } = useAuth();
	const [data, setData] = useState<Data>({
		email: "",
		password: "",
	});
	const router = useRouter();

	useEffect(() => {
		console.log(`Login page user: ${user?.email}`);
	}, [user]);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(data.email, data.password);
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="h-screen bg-gradient-to-br from-violet-600 to-purple-600 grid place-items-center">
			<form
				className="flex flex-col items-center justify-center px-6 py-12 rounded-xl bg-gray-50 w-80 shadow-2xl shadow-zinc-900"
				onSubmit={handleLogin}
			>
				{/* Form Header */}
				<h1 className="text-4xl font-bold text-violet-700 mb-10">Login</h1>

				{/* Text inputs */}
				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-col gap-4 w-full">
						<div className="relative">
							<input
								id="email"
								name="email"
								className="peer w-full bg-gray-50 border-0 border-b-2 border-b-gray-400 focus:ring-0 focus:outline-0 focus:border-b-violet-700 placeholder:text-transparent"
								type="text"
								placeholder="Email Address"
								onChange={(e) => setData({ ...data, email: e.target.value })}
							/>
							<label
								htmlFor="email"
								className="absolute -top-2.5 left-3 text-sm peer-placeholder-shown:text-base text-gray-400
								peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all duration-250"
							>
								Email Address
							</label>
						</div>
						<div className="relative">
							<input
								id="password"
								name="password"
								className="peer w-full bg-gray-50 border-0 border-b-2 border-b-gray-400 focus:ring-0 focus:outline-0 focus:border-b-violet-700 placeholder:text-transparent"
								type="password"
								placeholder="Password"
								onChange={(e) => setData({ ...data, password: e.target.value })}
							/>
							<label
								htmlFor="password"
								className="absolute -top-2.5 left-3 text-sm peer-placeholder-shown:text-base text-gray-400
								peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all duration-250"
							>
								Password
							</label>
						</div>
						{/* Buttons */}
					</div>
					<div className="flex flex-col justify-between text-center mt-2">
						<button
							className="w-full py-2 text-center font-bold bg-violet-500 text-gray-50 rounded-lg hover:bg-violet-600 hover:text-white focus:ring focus:ring-violet-600 focus:bg-violet-700 ring-offset-2 ring-offset-gray-50 transition ease-in-out"
							type="submit"
						>
							Login
						</button>
						<p className="mt-3 text-xs text-gray-700 font-semibold">
							Don&apos;t have an account?{" "}
							<Link href="/signup">
								<a className="underline font-extrabold text-violet-700 hover:text-violet-900">
									Create an Account
								</a>
							</Link>
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="text-center font-bold">OR</h2>
						<div>
							{/* Google sign-in not implemented */}
							<button
								disabled
								type="submit"
								className="w-full text-center bg-[#EA4335] hover:bg-[#DE3A2C] rounded-lg py-2 px-4 text-gray-50 font-bold hover:text-white focus:ring focus:ring-[#EA4335] focus:bg-[#D22D1F] ring-offset-2 ring-offset-gray-50 transition ease-in-out disabled:opacity-50"
							>
								Sign in with Google
							</button>
						</div>
						<div>
							{/* Facebook sign-in not implemented */}
							<button
								disabled
								type="submit"
								className="w-full bg-[#2F66DA] hover:bg-[#275FD1] rounded-lg py-2 px-4 text-gray-50 font-bold
								hover:text-white focus:ring focus:ring-[#2F66DA] focus:bg-[#1F59CA] ring-offset-2 ring-offset-gray-50 transition ease-in-out disabled:opacity-50"
							>
								Sign in with Facebook
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
