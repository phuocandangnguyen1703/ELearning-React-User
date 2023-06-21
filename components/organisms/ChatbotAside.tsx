import React from "react";
import ChatbotSearch from "./ChatbotSearch";
import ChatbotRecent from "./ChatbotRecent";

type Props = {};

const ChatbotAside = (props: Props) => {
  return (
    <aside className="h-full w-[289px] border-[1px] flex flex-col">
      <div className="h-[82px] w-full px-[12px] flex items-center border-b-[1px]">
        <ChatbotSearch></ChatbotSearch>
      </div>
      <div className="flex flex-1 overflow-hidden relative">
        <ChatbotRecent></ChatbotRecent>
      </div>
    </aside>
  );
};

export default ChatbotAside;
