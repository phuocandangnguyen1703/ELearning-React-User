import React, { useState } from "react";
import Input from "../Input";
import clsx, { ClassValue } from "clsx";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  className?: ClassValue;
  classNameInput?: ClassValue;
};

const Search = (props: Props) => {
  return (
    <div className={clsx("mx-2 rounded-xl flex items-center", props.className)}>
      <i className="fa-regular fa-magnifying-glass text-black mx-3 absolute"></i>
      <Input
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Tìm kiếm sản phẩm"
        className={clsx(
          "rounded-xl w-[16rem] pl-10 py-1",
          props.classNameInput
        )}
      ></Input>
    </div>
  );
};

export default Search;
