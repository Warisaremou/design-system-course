import PropTypes from 'prop-types';

export default function Textarea({ borderColor = "border-grey-100", ...props }) {
  return (
    <div className={`border p-2 w-96 h-48 ${borderColor}`}>
      <label className="text-grey-400 body-medium">
        Text area label
      </label>
      <textarea
        className="w-full h-full body border-none"
        {...props}
      ></textarea>
    </div>
  );
}

Textarea.propTypes = {
  borderColor: PropTypes.string,
};


