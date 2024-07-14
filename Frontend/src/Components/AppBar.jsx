import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function AppBar() {
  let navigate = useNavigate();

  return (
    <div className="bg-gray-300 h-10 w-9/12 m-auto p-2 mt-10 rounded-2xl">
      <button
        className="hover:underline ml-3"
        onClick={() => {
          let token = localStorage.getItem("token");
          const user = jwtDecode(token);
          navigate("/profile?id=" + user.userId);
        }}
      >
        Profile
      </button>
    </div>
  );
}

export { AppBar };
