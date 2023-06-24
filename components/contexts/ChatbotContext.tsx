import { history } from "@/apis/chatbot/index";
import { IChatbot } from "@/types/chatbot";
import EventEmitter from "events";
import React, {
  createContext,
  useEffect,
  useRef
} from "react";
import {
  UseFieldArrayReturn,
  UseFormReturn,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useLoading } from "../atoms";
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
  isBegin: boolean;
};

export const chatbotListener = new EventEmitter();

export const ChatbotContext = createContext<IContext>({});

const ChatbotContextProvider = (props: Props) => {
  const chatForm = useForm<IChatForm>({
    defaultValues: {
      recents: [],
      list: [],
      isBegin: true,
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
  const loading = useLoading();
  useEffect(() => {
    (async () => {
      loading.open();
      await history()
        .then((success) => chatForm.setValue("list", success.data))
        .catch((error) => console.log(error));
      loading.close();
    })();
  }, []);
  return (
    <ChatbotContext.Provider value={value}>
      {props.children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotContextProvider;
