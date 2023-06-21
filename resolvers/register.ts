import * as yup from "yup";
export const schemaRegister = yup.object().shape({
	fullname: yup.string().required("Vui lòng nhập tên."),
	email: yup
		.string()
		.email("Email không hợp lệ.")
		.required("Vui lòng nhập email."),
	username: yup.string().required("Vui lòng nhập tên đăng nhập."),
	password: yup
		.string()
		.min(8, "Mật khẩu phải ít nhất 8 ký tự.")
		.required("Vui lòng nhập mật khẩu."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Mật khẩu không khớp.")
		.required("Vui lòng nhập mật khẩu xác nhận."),
});
