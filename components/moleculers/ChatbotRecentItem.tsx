import React from "react";

type Props = {};

const ChatbotRecentItem = (props: Props) => {
  return (
    <div className=" bg-white flex flex-col gap-[1px] text-gray-secondary rounded-2xl px-[12px] py-[6px] cursor-pointer">
      <span className=" font-light text-sm">• 2mins ago</span>
      <span className=" font-semibold text-sm text-ellipsis overflow-hidden whitespace-nowrap">
        Designing SaaS UI as a developer
      </span>
      <span className=" font-light text-sm">5 questions asked</span>
    </div>
  );
};

export default ChatbotRecentItem; 
