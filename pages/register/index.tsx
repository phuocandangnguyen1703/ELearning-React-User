import { Register } from "@/components/templates";
import { RegisterFormType } from "@/types/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@iscv/toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "resolvers/register";
import { register } from "../../apis/auth/index";
import { setUser } from "@/redux/features/slices/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useLoading } from "@/components/atoms";

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
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const loading = useLoading();
  const handleSubmit = async (data: RegisterFormType) => {
    loading.open();
    await register(data)
      .then((success) => {
        toast.success("Đăng ký thành công");
        const data = success.data;
        dispatch(
          setUser({
            token: data.accessToken,
            name: data.user.fullname,
            id: data.user._id,
          })
        );
        setCookie(
          "user",
          JSON.stringify({
            token: data.accessToken,
            name: data.user.fullname,
            id: data.user._id,
          })
        );
        router.push("/");
        registerForm.reset();
      })
      .catch((error) => {
        toast.error();
        console.log(error);
      });
    loading.close();
  };

  const props = { registerForm, handleSubmit };
  return <Register {...props} />;
};

export default RegisterPage;
