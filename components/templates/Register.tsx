import { RegisterFormType } from "@/types/register";
import { Button, ImageOptimizing, TextField } from "../atoms";
import { Controller, UseFormReturn } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import toast from "@/components/atoms/Toast";
import ToastTemplate from "@/components/templates/ToastTemplate";
interface RegisterProps {
	registerForm: UseFormReturn<RegisterFormType, any>;
	handleSubmit: (data: RegisterFormType) => void;
	message: string;
	status:number;
}
const Register: React.FC<RegisterProps> = ({ registerForm, handleSubmit,status,message }) => {
	const notify = React.useCallback((type: string, message: string) => {
		toast({ type, message });
	}, []);


	return (
		<div className="bg-white h-screen w-full flex items-center">
			<div className ="d-flex justify-content-end">
				{/*{status === 200 && (*/}
				{/*	<ToastTemplate messages={message} toastType={"success"}/>*/}
				{/*)}*/}
				{/*{status === 210 && (*/}
				{/*	<ToastTemplate messages={message} toastType={"warning"}/>*/}
				{/*)}*/}
			</div>

			<div className="w-[80%] flex items-center h-[100%] m-auto shadow-lg rounded-xl overflow-hidden">
				<div className=" h-full">
					<ImageOptimizing src="/register.png" />
				</div>
				<div className="flex-1 p-4 w-full h-full">
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
								<div className="p-2 bg-[#2F80ED99] flex gap-4 w-2/3 h-11 text-xs font-medium justify-between rounded-full">
									<Link
										href="/login"
										className="w-1/2 text-center text-white flex items-center justify-center cursor-pointer"
									>
										Đăng nhập
									</Link>
									<p className="bg-[#2F80ED] text-white flex items-center justify-center px-4 w-1/2 text-center rounded-full cursor-pointer">
										Đăng ký
									</p>
								</div>

								<form
									className="flex w-full flex-col gap-4"
									onSubmit={registerForm.handleSubmit(handleSubmit)}
								>
									<Controller
										name="email"
										control={registerForm.control}
										render={({ field, fieldState }) => (
											<TextField
												{...field}
												errors={fieldState.error}
												required
												title="Địa chỉ Email"
												placeholder="Nhập username"
											/>
										)}
									/>
									<Controller
										name="fullname"
										control={registerForm.control}
										render={({ field, fieldState }) => (
											<TextField
												{...field}
												errors={fieldState.error}
												required
												title="Họ và tên"
												placeholder="Nhập Họ và tên"
											/>
										)}
									/>
									<Controller
										name="username"
										control={registerForm.control}
										render={({ field, fieldState }) => (
											<TextField
												{...field}
												errors={fieldState.error}
												required
												title="Tên đăng nhập"
												placeholder="Nhập username"
											/>
										)}
									/>

									<Controller
										name="password"
										control={registerForm.control}
										render={({ field, fieldState }) => (
											<TextField
												{...field}
												errors={fieldState.error}
												required
												type="password"
												title="Mật khẩu"
												placeholder="Nhập mật khẩu"
											/>
										)}
									/>
									<Controller
										name="confirmPassword"
										control={registerForm.control}
										render={({ field, fieldState }) => (
											<TextField
												{...field}
												errors={fieldState.error}
												required
												type="password"
												title="Xác nhận lại mật khẩu"
												placeholder="Nhập lại mật khẩu"
											/>
										)}
									/>

									<Button
										type="submit"
										className="!text-sm font-semibold !bg-[#2F80ED] h-10 flex items-center justify-center mt-2"
									>
										Đăng ký
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

export default Register;
