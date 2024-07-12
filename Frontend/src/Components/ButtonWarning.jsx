import { Link } from "react-router-dom";

export default function ButtonWarning(props) {
  return (
    <div className="ml-24 mt-5">
      {props.label}
      <Link to={props.to} className="underline ml-1">
        {props.buttontext}
      </Link>
    </div>
  );
}
