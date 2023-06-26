import React from "react";
import { Button, ImageOptimizing, TextField } from "../atoms";
import { FcGoogle } from "react-icons/fc";
import { LoginFormType } from "@/types/login";
import { Controller, UseFormReturn } from "react-hook-form";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
interface LoginProps {
  loginForm: UseFormReturn<LoginFormType, any>;
  handleSubmit: (data: LoginFormType) => void;
}
const Login: React.FC<LoginProps> = ({ loginForm, handleSubmit }) => {
  return (
    <div className="bg-white h-screen w-full flex items-center px-5 py-8">
      <div className="w-2/3 flex items-center h-[90%] m-auto shadow-lg rounded-xl overflow-hidden">
        <div className="flex-1 h-full">
          <ImageOptimizing src="/login.png" />
        </div>
        <div className="flex-1 p-4 w-full h-full overflow-auto">
          <div className="w-2/3 m-auto flex flex-col h-full">
            <div className="flex justify-end items-end flex-col w-full">
              <span className="bg-[url('/logo_2.png')] bg-no-repeat h-10 w-28 bg-cover" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex items-center flex-col gap-2 mt-6"
              >
                <p className="text-sm font-medium">Chào mừng đến với EduPath</p>
                <div className="p-2 bg-[#2F80ED99] flex gap-4 w-full h-11 text-xs font-medium justify-between rounded-full">
                  <p className="bg-[#2F80ED] text-white flex items-center justify-center px-4 w-1/2 text-center rounded-full cursor-pointer">
                    Đăng nhập
                  </p>
                  <Link
                    href="/register"
                    className="w-1/2 text-center text-white flex items-center justify-center cursor-pointer"
                  >
                    Đăng ký
                  </Link>
                </div>

                <form
                  className="flex flex-col gap-4"
                  onSubmit={loginForm.handleSubmit(handleSubmit)}
                >
                  <i className="mt-2 text-sm text-[#5B5B5B] w-full ">
                    "Learning is a treasure that will follow its owner
                    everywhere."
                  </i>
                  <Controller
                    name="username"
                    control={loginForm.control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        errors={fieldState.error}
                        title="Tên đăng nhập"
                        required
                        placeholder="Nhập username"
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={loginForm.control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        errors={fieldState.error}
                        type="password"
                        title="Mật khẩu"
                        required
                        placeholder="Nhập mật khẩu"
                      />
                    )}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-2 text-xs font-medium text-gray-900"
                      >
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <p className="text-xs font-medium text-gray-900">
                      Quên mật khẩu?
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="!text-sm font-semibold !bg-[#2F80ED] h-10 flex items-center justify-center"
                  >
                    Đăng nhập
                  </Button>
                  <p className="text-center italic text-sm text-[#838383]">
                    Hoặc
                  </p>
                  <Button className="!text-sm font-medium gap-2 !bg-[#F6F6F6] h-10 flex items-center justify-center !text-[#2F80ED]">
                    <FcGoogle size={20} /> Đăng nhập với Google
                  </Button>
                </form>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
