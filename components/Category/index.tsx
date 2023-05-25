import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  href?: Url;
};

const Category = (props: Props) => {
  if (props.href)
    return (
      <Link
        href={props.href}
        className={clsx(props.className, "rounded-xl shadow-md")}
      >
        {props.children}
      </Link>
    );
  else
    return (
      <a className={clsx(props.className, "rounded-xl shadow-md")}>
        {props.children}
      </a>
    );
};

export default Category;
