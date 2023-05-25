import React from "react";

type Props = {
  text: string | string[] | undefined;
};

const FormError = (props: Props) => {
  return <div className=" text-red-400">{props.text}</div>;
};

export default FormError;
