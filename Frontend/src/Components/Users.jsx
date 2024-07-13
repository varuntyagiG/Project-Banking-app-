import "react-router-dom";
import { useNavigate } from "react-router-dom";

function Users({ user }) {
  let navigate = useNavigate();

  return (
    <div>
      <span>{user.firstName}</span> <span>{user.lastName}</span>
      <div>
        <button
          className="bg-gray-400 w-20 rounded-2xl"
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
        >
          Transfer Amount
        </button>
      </div>
    </div>
  );
}

export { Users };
