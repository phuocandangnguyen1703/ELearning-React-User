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
import { login } from "apis/auth";
import { useToast } from "@iscv/toast";
import { useLoading } from "@/components/atoms";
const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const loading = useLoading();
  const loginForm = useForm<LoginFormType>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });
  const handleSubmit = async (data: LoginFormType) => {
    loading.open();
    await login(data)
      .then((success) => {
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
      })
      .catch((error) => {
        console.log(error);
        toast.error("Đăng nhập thất bại");
      });
    loading.close();
  };
  const props = { loginForm, handleSubmit };
  return <Login {...props} />;
};

export default LoginPage;
