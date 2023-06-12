import { Login } from "@/components/templates";
import { LoginFormType } from "@/types/login";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "resolvers/login";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/slices/user";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
const LoginPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const loginForm = useForm<LoginFormType>({
		defaultValues: {
			username: "",
			password: "",
		},
		resolver: yupResolver(schemaLogin),
	});
	const handleSubmit = (data: LoginFormType) => {
		console.log(data);
		dispatch(setUser({ token: "test", name: "Mẫn Quân", id: "hahaa" }));
		setCookie(
			"user",
			JSON.stringify({ token: "test", name: "Mẫn Quân", id: "hahaa" })
		);

		router.push("/");
	};
	const props = { loginForm, handleSubmit };
	return <Login {...props} />;
};

export default LoginPage;
