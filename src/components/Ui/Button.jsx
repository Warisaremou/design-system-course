const Button = ({ variant, onClick, children }) => {
	let buttonStyle = "px-6 py-2 rounded-md body-medium transition duration-300 ease-in-out";

	switch (variant) {
		case "primary":
			buttonStyle += " bg-linear text-white hover:bg-blue-600";
			break;
		case "secondary":
			buttonStyle += " bg-gray-500 text-white hover:bg-gray-600";
			break;
		case "danger":
			buttonStyle += " bg-red-500 text-white hover:bg-red-600";
			break;
		case "success":
			buttonStyle += " bg-green-300 text-white hover:bg-green-400";
			break;
		case "outline":
			buttonStyle += " border border-blue-500 text-blue-500 hover:bg-blue-50";
			break;
		default:
			buttonStyle += " bg-blue-500 text-white hover:bg-blue-600";
	}

	return (
		<button className={buttonStyle} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
