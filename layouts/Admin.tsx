import React, { useState } from "react";
import { Button, LoadingContainer } from "~/components";
import { EButton } from "~/components/Button";
import Link from "next/link";
import { routes } from "~/routes/index";
import Image from "next/image";
import { logo } from "~/assets";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ToastContainer } from "@iscv/toast";

type Props = {
  children: React.ReactNode;
};

const Admin = (props: Props) => {
  const [expand, setExpand] = useState(true);
  const router = useRouter();
  return (
    <>
      <ToastContainer />
      <LoadingContainer />
      <main className="flex w-full p-2 min-h-screen gap-4">
        {/* <aside className="rounded-xl bg-white py-3 px-3 min-h-full flex flex-col gap-3">
          <h2 className="flex items-center">
            <Image
              src={logo}
              width={50}
              height={50}
              alt={"logo"}
              className=" cursor-pointer"
              onClick={() => setExpand(!expand)}
            ></Image>
            {expand && (
              <span className="ml-3 text-2xl font-quicksand font-bold">
                Minh bảo
              </span>
            )}
          </h2>
          <div className="flex items-center">
            <Button type={EButton.Square} onClick={() => {}}>
              <div></div>
            </Button>
            {expand && <a className="text-xl ml-4 font-medium">Sakura</a>}
          </div>
          <div>
            <h4 className="text-gray-500 text-lg">Menu</h4>
            <div className="flex flex-col gap-2 mt-2">
              {routes.map((value) => {
                return (
                  <Link
                    href={value.link}
                    className={clsx(
                      "flex items-center text-gray-600 hover:bg-blue-600 hover:text-white px-4 h-10 py-1 rounded-lg",
                      {
                        "bg-blue-600 text-white": router.pathname.includes(
                          value.link
                        ),
                      }
                    )}
                    key={value.name}
                  >
                    <i
                      className={`fa-regular fa-${value.icon} shrink-0 w-5 h-5 flex justify-center items-center`}
                    ></i>
                    {expand && (
                      <h6 className="ml-4 font-semibold">{value.display}</h6>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </aside> */}
        <div className="rounded-xl bg-white py-3 px-3 min-h-full flex-1 overflow-x-auto">
          {props.children}
        </div>
      </main>
    </>
  );
};

export default Admin;
