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
const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const loginForm = useForm<LoginFormType>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });
  const handleSubmit = async (data: LoginFormType) => {
    console.log(data);
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
    //TODO: Xử lý đăng nhập chổ này.
    // TODO: Mã hoá token dựa trên username, id
    // const token = ......
  };
  const props = { loginForm, handleSubmit };
  return <Login {...props} />;
};

export default LoginPage;
