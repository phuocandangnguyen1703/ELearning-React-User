import React, { useContext, useState, useRef } from "react";
import { Button, TextAreaField, TextField } from "../atoms";
import { IoMdSend } from "react-icons/io";
import clsx from "clsx";
import { ChatbotContext } from "../contexts/ChatbotContext";
import { getChat } from "apis/chatbot";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { EChatbotFrom } from "@/types/chatbot";

type Props = {
  onSubmit?: (...args: any) => void;
  buttonClassName?: string;
  buttonIcon?: React.ReactNode;
  mode?: "default" | "chatbot";
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ChatbotTyping = (props: Props) => {
  const [text, setText] = useState<string | undefined>("");
  const userId = useSelector((state: RootState) => state.user.id);
  const { mode = "default" } = props;
  const { listForm } = useContext(ChatbotContext);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChat = async () => {
    if (!text) return;
    setText("");
    listForm?.append({
      _id: v4(),
      user_id: userId,
      from: EChatbotFrom.STUDENT,
      messages: text!,
      createdAt: new Date(),
    });
    await getChat(text!)
      .then((success) => {
        listForm?.append(success.data);
      })
      .catch((error) => console.log(error));
  };

  const handleKeyDown = async(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleChat();
      props.onKeyDown?.(e);

      // Move cursor to the beginning of the text
      if (textAreaRef.current) {
        textAreaRef.current.selectionStart = 0;
        textAreaRef.current.selectionEnd = 0;
      }
    }
  };

  return (
    <div className={clsx("flex w-full items-center relative", props.className)}>
      <TextAreaField
        onKeyDown={handleKeyDown}
        name={"chat-input"}
        value={props.value || text}
        onChange={(e) => props.onChange?.(e) || setText(e.target.value)}
        containerClassName="!w-full h-10"
        noLable
        inputClassName="resize-none !w-full border-[2px] rounded-xl !px-3 flex items-center h-full !pt-[5px]"
        ref={textAreaRef}
      ></TextAreaField>
      <button
        className={clsx(
          "absolute right-0 w-12 bg-transparent p-[10px] hover:border-none hover:outline-none",
          props.buttonClassName
        )}
        onClick={async (e) => {
          if (mode === "default") {
            props.onSubmit?.(e);
            return;
          }
          if (mode === "chatbot") {
            await handleChat();
            props.onSubmit?.(e);
            return;
          }
        }}
      >
        {props.buttonIcon || (
          <IoMdSend className="  text-blue-secondary text-2xl mr-4 "></IoMdSend>
        )}
      </button>
    </div>
  );
};

export default ChatbotTyping;
