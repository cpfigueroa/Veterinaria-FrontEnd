export const validateRequired = (value) => {
	return value && value.trim() !== '';
};

export const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
};
