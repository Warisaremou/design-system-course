function Textarea (props) {
  let width = props.width;
  let height = props.height;
  let border = props.border;

  return (
    <textarea className={props}></textarea>
  );
}



export default Textarea;