import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "~/types/product";

type Props = {
  data: IProduct | undefined;
};

const Item = (props: Props) => {
  const { data } = props;
  return (
    <Link
      href={`/${data?.category}/${data?._id}`}
      className="flex flex-col justify-between items-strech rounded-2xl shadow-md h-[23rem] bg-gradient-white px-8 py-7 translate-y-[0rem] hover:translate-y-[-1rem] cursor-pointer hover:transition-all hover:duration-500 hover:ease-in-out transition-all duration-500 ease-in-out"
    >
      <Image
        width={300}
        height={300}
        src={"https://assets.stickpng.com/images/588526fb6f293bbfae451a3a.png"}
        alt="item"
        className="rounded-md mt-3"
      ></Image>
      <div className="mt-4 flex justify-between items-stretch">
        <div>
          <span className="block text-lg font-medium">{`${data?.brandName}${
            data?.subCategoryName ? ` ${data?.subCategoryName}` : ""
          } ${data?.model}`}</span>
          <span className="block text-red-400 mt-3 text-xl font-semibold">
            {data?.price?.toLocaleString()}
          </span>
        </div>
        <div className="h-full flex items-end">
          <button className="rounded-full w-[3rem] h-[3rem] bg-pink-300">
            <i className="fa-regular fa-bag-shopping text-white text-xl"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
