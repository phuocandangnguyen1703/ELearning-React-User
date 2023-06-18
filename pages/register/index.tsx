import { Register } from "@/components/templates";
import { RegisterFormType } from "@/types/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@iscv/toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "resolvers/register";
import { register } from "../../apis/auth/index";

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
  const toast = useToast();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const handleSubmit = (data: RegisterFormType) => {
    console.log(data);
    register(data)
      .then((response) => {
        console.log(response);
        toast.success("Đăng ký thành công");
        setStatus(response.status);
        // registerForm.reset();
      })
      .catch((error) => {
        toast.error();
        console.log(error);
        // const message = error.response.data?.message;
      });
  };

  const props = { registerForm, handleSubmit, message, status };
  return <Register {...props} />;
};

export default RegisterPage;
