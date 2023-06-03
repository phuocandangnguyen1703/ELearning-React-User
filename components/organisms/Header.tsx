"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { TextFieldSearch } from "../atoms";
import { BsCart3 } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";

const navigation = {
	pages: [
		{ name: "Trang chủ", href: "/" },
		{ name: "Tất cả sản phẩm", href: "/products" },
		{ name: "Dành cho nữ", href: "/products?type=women" },
		{ name: "Dành cho nam", href: "/products?type=men" },
		// { name: 'Bộ phối', href: '/products' },
		{ name: "Về chúng tui", href: "/about" },
	],
};

const Header = () => {
	const { asPath } = useRouter();
	return (
		<header className="sticky bg-main-100 w-full z-40 top-0 shadow-sm">
			<nav aria-label="Top" className="h-16 py-4 flex items-center">
				<div className="flex-1 flex items-center">
					<button
						type="button"
						className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
					>
						{/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
					</button>
					<div className="flex items-center gap-2 px-10">
						<div className="bg-[url('/logo.png')] w-16 h-12 bg-no-repeat bg-contain" />
						<div className="bg-[url('/logo_text.png')] w-28 h-4 bg-no-repeat bg-contain" />
					</div>
					<span className="h-8 w-px bg-gray-200" aria-hidden="true" />
					{/* Flyout menus */}

					<div className="flex h-full space-x-8 px-4">
						<Link
							href="/mycourse"
							className={clsx(
								"flex items-center text-sm font-medium text-white",
								{
									"!font-bold": asPath === "/mycourse",
								}
							)}
						>
							Khóa học của tôi
						</Link>
					</div>

					<div className="flex items-center mx-4 h-8">
						<TextFieldSearch className="flex-1" />
					</div>
					{/* Logo */}
					<div className="ml-auto flex items-center px-8">
						<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
							<Link
								href="/cart"
								className="text-xs font-medium text-white hover:text-gray-100"
							>
								<BsCart3 size={20} color="white" />
							</Link>
							<div className="text-xs font-medium text-white hover:text-gray-100">
								<VscBell size={20} color="white" />
							</div>
							<span className="h-8 w-px bg-gray-200" aria-hidden="true" />
							<div className="flex items-center gap-2">
								<Image
									className="object-cover w-8 h-8 rounded-full"
									src={"" || "https://shorturl.at/aNQT2"}
									alt=""
									unoptimized
									width={32}
									height={32}
									aria-hidden="true"
								/>
								<p className="text-xs font-medium text-white">Mẫn Quân</p>
								<BiChevronDown size={14} color="white" />
							</div>
							<div className="flex items-center gap-2 bg-[#1414681A] rounded-full p-2">
								<div className="bg-[url('/vietnam.png')] rounded-full w-4 h-4 bg-no-repeat bg-contain" />
								<BiChevronDown size={14} color="white" />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
