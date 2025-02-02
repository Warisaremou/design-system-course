import PropTypes from "prop-types";

export default function Textarea({ borderColor = "border-grey-100", ...props }) {
	return (
		<div className={`border p-2 w-full ${borderColor}`}>
			<label className="text-grey-400 body-medium">Text area label</label>
			<textarea rows="3" className="size-full focus:outline-none body border-none" {...props}></textarea>
		</div>
	);
}

Textarea.propTypes = {
	borderColor: PropTypes.string,
};
