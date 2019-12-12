import * as Yup from "yup";
const validations = Yup.object().shape({
	username: Yup
		.string()
		.required('zorunlu.      '),
	password: Yup
		.string()
		.required('zorunlu.      '),
	passwordConfirm: Yup
		.string()
		.oneOf([Yup.ref('password')], 'paralolar eşleşmiyor.      ')
		.required('doğrulayın      ')
});

module.exports = validations;