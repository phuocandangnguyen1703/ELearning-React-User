import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#081E4C] text-white border-t mt-2 relative  py-8">
			<div className="flex items-center  flex-col gap-5 justify-center">
				<div className="flex divide-x-2 gap-6 items-center">
					<Image src="/logo.svg" alt="" width={200} height={200} />
					<p className="px-6 text-xl font-medium w-56 ">
						Online Courses for IT market
					</p>
				</div>
				<div className="flex items-center gap-4 h-6 text-sm font-light opacity-80">
					<p>Careers</p>
					<span className="w-[1px] h-full bg-white" />
					<p>Privacy Policy</p>
					<span className="w-[1px] h-full bg-white" />
					<p>Privacy Policy</p>
				</div>
				<p className="text-sm font-light opacity-80">
					© 2023 Information Systems Inc.{" "}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
