import { Register } from "@/components/templates";
import { RegisterFormType } from "@/types/register";
import { yupResolver } from "@hookform/resolvers/yup";
import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "resolvers/register";
import {add} from "../../apis/login";

const initForm = {
	confirmPassword: "",
	fullname: "",
	email: "",
	password: "",
	username: "",
};
const RegisterPage = () => {
	const registerForm = useForm<RegisterFormType>({
		defaultValues: initForm,
		resolver: yupResolver(schemaRegister),
	});
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(0);
	const handleSubmit = (data: RegisterFormType) => {
		console.log(data);
			add(data)
			.then((response) => {
				console.log("Đăng ký thành công", response.data.message);
				setMessage(response.data.message);
				setStatus(response.status)
				// registerForm.reset();


			})
			.catch((error) => {
				console.log(error);
				const message = error.response.data.message
			})
	};

		const props = { registerForm, handleSubmit, message, status };
	return <Register {...props} />;
};

export default RegisterPage;
