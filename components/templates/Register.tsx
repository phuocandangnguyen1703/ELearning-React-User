import { RegisterFormType } from "@/types/register";
import { Button, ImageOptimizing, TextField } from "../atoms";
import { Controller, UseFormReturn } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
interface RegisterProps {
	registerForm: UseFormReturn<RegisterFormType, any>;
	handleSubmit: (data: RegisterFormType) => void;
}
const Register: React.FC<RegisterProps> = ({ registerForm, handleSubmit }) => {
	return (
		<div className="bg-white h-screen w-full flex items-center">
			<div className="w-2/3 flex items-center h-[93%] m-auto shadow-lg rounded-xl overflow-hidden">
				<div className="flex-1 h-full">
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
									className="flex flex-col gap-4"
									onSubmit={registerForm.handleSubmit(handleSubmit)}
								>
									<p className="mt-2 text-sm text-[#5B5B5B] w-full ">
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.
									</p>
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
