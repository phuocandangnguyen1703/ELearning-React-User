import { IChatbot } from "@/types/chatbot";
import React, { createContext, useContext, useRef, useState } from "react";
import {
  UseFieldArrayReturn,
  UseFormReturn,
  useFieldArray,
  useForm,
} from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

type IContext = {
  chatForm?: UseFormReturn<IChatForm, any, undefined>;
  listForm?: UseFieldArrayReturn<IChatForm, "list", "id">;
  chatRef?: React.RefObject<HTMLDivElement>;
};

type IChatForm = {
  recents: {
    _id: string;
    time: Date;
    text: string;
  }[];
  list: IChatbot[];
};

export const ChatbotContext = createContext<IContext>({});

const ChatbotContextProvider = (props: Props) => {
  const chatForm = useForm<IChatForm>({
    defaultValues: {
      recents: [],
      list: [],
    },
  });
  const chatRef = useRef<HTMLDivElement>(null);
  const listForm = useFieldArray({
    control: chatForm.control,
    name: "list",
  });
  const value = {
    chatForm,
    listForm,
    chatRef,
  };
  return (
    <ChatbotContext.Provider value={value}>
      {props.children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotContextProvider;
