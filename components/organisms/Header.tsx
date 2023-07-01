"use client";
import { setModal } from "@/redux/features/slices/modal";
import { UserReduxProps } from "@/redux/features/slices/user";
import { RootState } from "@/redux/store";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextFieldSearch } from "../atoms";
import ModalSurvey from "./ModalSurvey";
import { getCookie, deleteCookie } from "cookies-next";

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
  const { asPath, push } = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState<UserReduxProps>();

  useEffect(() => {
    setAuth(user);
  }, [user]);
  const handleSignout = () => {
    deleteCookie("user");
  };
  return (
    <header className="sticky bg-main-100 w-full z-[999] top-0 shadow-sm select-none">
      <nav aria-label="Top" className="h-16 py-4 flex items-center">
        <div className="flex-1 flex items-center">
          <button
            type="button"
            className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
          >
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
          <Link href="/" className="flex items-center gap-2 px-10">
            <span className="bg-[url('/logo.png')] w-16 h-12 bg-no-repeat bg-contain" />
            <span className="bg-[url('/logo_text.png')] w-28 h-4 bg-no-repeat bg-contain" />
          </Link>
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

          {/* <div className="flex items-center mx-4 h-8">
            <TextFieldSearch className="flex-1 text-white" />
          </div> */}
          {/* Logo */}
          <section className="ml-auto flex items-center px-8">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {auth?.token ? (
                <>
                  {/* <BsCart3
                    size={20}
                    onClick={() => push("/cart")}
                    className="text-xs font-medium text-white hover:text-gray-100"
                    color="white"
                  />
                  <VscBell
                    size={20}
                    className="text-xs font-medium text-white hover:text-gray-100"
                    onClick={() => dispatch(setModal({ isOpen: true }))}
                    color="white"
                  /> */}

                  <span className="h-8 w-px bg-gray-200" aria-hidden="true" />

                  <div
                    id="user"
                    className="flex items-center gap-2 relative pr-12"
                  >
                    <Image
                      className="object-cover w-8 h-8 rounded-full"
                      src={"" || "https://shorturl.at/aNQT2"}
                      alt=""
                      unoptimized
                      width={32}
                      height={32}
                      aria-hidden="true"
                    />
                    <p className="text-xs font-medium text-white">
                      {auth?.name}
                    </p>
                    <BiChevronDown size={14} color="white" />

                    <div
                      id="dropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[30px] right-0 w-fit whitespace-normal min-w-12 -translate-x-12"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 w-full "
                        aria-labelledby="dropdownDefaultButton"
                      >
                        {/* <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li> */}
                        {/* <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Settings
                          </a>
                        </li> */}
                        {/* <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li> */}
                        <li>
                          <a
                            onClick={handleSignout}
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white whitespace-nowrap"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Button
                  onClick={() => push("/login")}
                  className="!bg-white !text-[#0066FF] uppercase"
                >
                  Đăng nhập
                </Button>
              )}

              {/* <div className="flex items-center gap-2 bg-[#1414681A] rounded-full p-2">
                <span className="bg-[url('/vietnam.png')] rounded-full w-4 h-4 bg-no-repeat bg-contain" />
                <BiChevronDown size={14} color="white" />
              </div> */}
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Header;
