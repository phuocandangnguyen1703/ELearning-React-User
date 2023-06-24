import { chatBackground } from "@/assets/home";
import { useContext } from "react";
import { ChatbotContext } from "../contexts/ChatbotContext";
import { ChatbotRecentItem } from "../moleculers";

type Props = {};

const ChatbotRecent = (props: Props) => {
  // const { recents } = useContext(ChatbotContext);
  return (
    <>
      <div
        className=" flex-1 bg-cover blur-sm overflow-hidden"
        style={{ backgroundImage: `url(${chatBackground.src})` }}
      ></div>
      <div className=" absolute inset-0">
        <div className="px-[19px] py-[10px] text-white font-semibold text-lg">
          <span>Tin nhắn gần đây</span>
        </div>
        <div className="flex flex-col w-full overflow-y-auto p-[12px] gap-2">
          {/* {recents?.map((recent) => {
            return <ChatbotRecentItem></ChatbotRecentItem>;
          })} */}
        </div>
      </div>
    </>
  );
};

export default ChatbotRecent;
