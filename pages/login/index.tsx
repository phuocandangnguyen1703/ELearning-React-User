import { Login } from "@/components/templates";
import { LoginFormType } from "@/types/login";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "resolvers/login";
const LoginPage = () => {
	const loginForm = useForm<LoginFormType>({
		defaultValues: {
			username: "",
			password: "",
		},
		resolver: yupResolver(schemaLogin),
	});
	const handleSubmit = (data: LoginFormType) => {
		console.log(data);
	};
	const props = { loginForm, handleSubmit };
	return <Login {...props} />;
};

export default LoginPage;
