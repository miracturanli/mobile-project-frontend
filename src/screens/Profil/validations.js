import * as Yup from "yup";
const validations = Yup.object().shape({
	isim: Yup
		.string()
		.required('zorunlu.      '),
	soyisim: Yup
		.string()
        .required('zorunlu.      '),
    yas: Yup
		.string()
        .required('zorunlu.      '),
    boy: Yup
		.string()
        .required('zorunlu.      '),
    kilo: Yup
		.string()
		.required('zorunlu.      ')
});

module.exports = validations;