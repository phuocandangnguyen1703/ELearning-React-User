import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type IContext = {
  recents?: unknown[];
  setRecents?: React.Dispatch<React.SetStateAction<unknown[]>>;
};

export const ChatbotContext = createContext<IContext>({});

const ChatbotContextProvider = (props: Props) => {
  const [recents, setRecents] = useState<unknown[]>([1, 2, 3]);
  const value = {
    recents,
    setRecents,
  };
  return (
    <ChatbotContext.Provider value={value}>
      {props.children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotContextProvider;
