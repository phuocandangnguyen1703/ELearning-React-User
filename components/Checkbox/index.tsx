import React from "react";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  title: string;
};

const Checkbox = (props: Props) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        className="focus:outline-pink-300 w-4 h-4 checked:accent-pink-300 cursor-pointer text-white border-0 rounded-md focus:ring-0"
        onChange={props.onChange}
        checked={props.checked}
      ></input>
      <span className="cursor-default">{props.title}</span>
    </div>
  );
};

export default Checkbox;
