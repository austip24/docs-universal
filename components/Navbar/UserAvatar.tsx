import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "../../providers/AuthProvider";
import { AiOutlineUser } from "react-icons/ai";

interface UserAvatarProps {}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { user } = useAuth();

	return (
		<>
			{user.photoURL === null ? (
				<AiOutlineUser className="rounded-full cursor-pointer hover:text-indigo-50 w-8 h-8" />
			) : (
				<Image
					src={user.photoURL}
					alt="User photo"
					width={40}
					height={40}
					className="rounded-full cursor-pointer"
				/>
			)}
		</>
	);
};

export default UserAvatar;
