import { BotIcon } from "@/assets/home";
import React, { useContext, useEffect } from "react";
import { Controller } from "react-hook-form";
import Image from "next/image";
import { useSelector } from "react-redux";
import { EChatbotFrom, IChatbot } from "@/types/chatbot";
import { ChatbotContext } from "../contexts/ChatbotContext";
type Props = {
  chats: IChatbot[];
};

const ChatbotList = ({ chats }: Props) => {
  const { chatRef } = useContext(ChatbotContext);
  useEffect(() => {
    if (chatRef?.current) {
      const chatContainer = chatRef.current;
      const lastChild = chatContainer.lastElementChild;
      if (lastChild) {
        lastChild.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }
  }, [chats]);
  return (
    <div className="flex w-full gap-3 flex-col">
      {chats.map((chat, index) => {
        if (chat.from === EChatbotFrom.STUDENT)
          return (
            <div key={chat.__v} className="w-full flex justify-end gap-2 ">
              <div className="max-w-[70%] flex gap-2">
                <div className=" bg-blue-secondary rounded-s-xl rounded-br-xl py-2 px-4 text-white">
                  {chat.messages}
                </div>
                <Image
                  src="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/4/22/photo1619081646120-16190816462552046046483.jpg"
                  alt="avatar"
                  className="rounded-full w-9 h-9 object-cover"
                  width={40}
                  height={40}
                ></Image>
              </div>
            </div>
          );
        if (chat.from === EChatbotFrom.BOT)
          return (
            <div key={chat._id} className="w-full flex justify-start gap-2 ">
              <div className="max-w-[80%] flex gap-2">
                <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-blue-secondary bg-opacity-50 p-1 object-cover shrink-0">
                  <BotIcon className="w-full h-full"></BotIcon>
                </div>
                <div className=" bg-gray-200 rounded-e-xl rounded-bl-xl py-2 px-4 text-black">
                  {chat.messages}
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ChatbotList;
