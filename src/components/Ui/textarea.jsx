import PropTypes from 'prop-types';

export default function Textarea({ borderColor = "border-gray-300", ...props }) {
  return (
    <div className={`border-2 p-2 rounded-md ${borderColor}`}>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        Text area label
      </label>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none"
        placeholder="Message..."
        rows="3"
        {...props}
      ></textarea>
    </div>
  );
}

Textarea.propTypes = {
  borderColor: PropTypes.string,
};


