import { Register } from "@/components/templates";
import { RegisterFormType } from "@/types/register";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "resolvers/register";
const initForm = {
	confirmPassword: "",
	email: "",
	password: "",
	username: "",
};
const RegisterPage = () => {
	const registerForm = useForm<RegisterFormType>({
		defaultValues: initForm,
		resolver: yupResolver(schemaRegister),
	});
	const handleSubmit = (data: RegisterFormType) => {
		console.log(data);
	};

	const props = { registerForm, handleSubmit };
	return <Register {...props} />;
};

export default RegisterPage;
