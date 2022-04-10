import "./Input.css";

function Input(props) {
  return (
    <input
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      required
      className="input"
      value={props.value}
    />
  );
}

export default Input;
