import * as yup from "yup";
export const schemaLogin = yup.object().shape({
	username: yup.string().required("Vui lòng nhập tên đăng nhập"),
	password: yup
		.string()
		.min(8, "Mật khẩu phải ít nhất 8 ký tự")
		.required("Vui lòng nhập mật khẩu"),
});
