
import "./Button.css";

function Button(props) {
  return (
    <button type={props.type} onClick = {props.onClick} className="btn button">
      {props.text}
    </button>
  );
}


export default Button;