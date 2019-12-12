import * as Yup from "yup";
const validations = Yup.object().shape({
	username: Yup
		.string()
		.required('zorunlu.      '),
	password: Yup
		.string()
		.required('zorunlu.      ')
});

module.exports = validations;