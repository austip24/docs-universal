import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import UserPhoto from "./UserAvatar";
import Link from "next/link";
import { useAuth } from "../../providers/AuthProvider";

interface UserDropdownProps {}

const UserDropdown: React.FC<UserDropdownProps> = () => {
	const { logout } = useAuth();

	return (
		<Menu as="div" className="relative inline-block text-left">
			{/* Toggle Button */}
			<div className="select-none">
				<Menu.Button className="flex border-2 border-indigo-200 hover:border-indigo-50 m-4 rounded-full">
					<UserPhoto />
				</Menu.Button>
			</div>

			<Transition
				as={React.Fragment}
				enter="transition ease-in duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-out duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-5 w-52 -mt-3 origin-top-right bg-gray-50 rounded-md divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="p-1">
						<Menu.Item>
							{({ active }) => (
								<span
									className={`group flex rounded-md items-center w-full p-2 text-sm cursor-pointer ${
										active
											? "bg-indigo-900 text-gray-50"
											: "bg-gray-50 text-gray-900"
									}`}
								>
									<Link href="/account">
										<a className="w-full">Account Settings</a>
									</Link>
								</span>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<span
									className={`group flex rounded-md items-center w-full p-2 text-sm cursor-pointer ${
										active
											? "bg-indigo-900 text-gray-50"
											: "bg-gray-50 text-gray-900"
									}`}
								>
									<Link href="/">
										<a className="w-full">Account Settings</a>
									</Link>
								</span>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<span
									className={`group flex rounded-md items-center w-full p-2 text-sm cursor-pointer ${
										active
											? "bg-indigo-900 text-gray-50"
											: "bg-gray-50 text-gray-900"
									}`}
								>
									<button className="w-full text-left" onClick={logout}>
										Logout
									</button>
								</span>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default UserDropdown;
