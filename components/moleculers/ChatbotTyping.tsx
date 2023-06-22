import React, { useState } from "react";
import { Button, TextAreaField, TextField } from "../atoms";
import { IoMdSend } from "react-icons/io";
import clsx from "clsx";

type Props = {
  onSubmit: (...args: any) => void;
  buttonClassName?: string;
  buttonIcon?: React.ReactNode;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ChatbotTyping = (props: Props) => {
  const [text, setText] = useState<string | undefined>(undefined);
  return (
    <div className={clsx("flex w-full items-center relative", props.className)}>
      <TextAreaField
        name={"chat-input"}
        value={props.value || text}
        onChange={(e) => props.onChange?.(e) || setText(e.target.value)}
        containerClassName="!w-full h-10"
        noLable
        inputClassName=" resize-none !w-full border-[2px] rounded-xl !px-3 flex items-center h-full !pt-[5px]"
      ></TextAreaField>
      <button
        className={clsx(
          "absolute right-0 w-12 bg-transparent p-[10px] hover:border-none hover:outline-none",
          props.buttonClassName
        )}
        onClick={props.onSubmit}
      >
        {props.buttonIcon || (
          <IoMdSend className="  text-blue-secondary text-2xl mr-4 "></IoMdSend>
        )}
      </button>
    </div>
  );
};

export default ChatbotTyping;
