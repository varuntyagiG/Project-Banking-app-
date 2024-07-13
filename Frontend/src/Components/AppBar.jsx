import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function AppBar() {
  let navigate = useNavigate();

  return (
    <div className="bg-gray-300">
      <button
        onClick={() => {
          let token = localStorage.getItem("token");
          const user = jwtDecode(token);
          navigate("/profile?id=" + user.userId);
        }}
      >
        User-Profile
      </button>
    </div>
  );
}

export { AppBar };
