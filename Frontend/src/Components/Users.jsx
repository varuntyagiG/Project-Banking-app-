import "react-router-dom";
import { useNavigate } from "react-router-dom";

function Users({ user }) {
  let navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-around items-center">
        <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              {user.firstName[0]}
            </div>
          </div>
          <div className="flex flex-col justify-center h-ful">
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-gray-400 w-40 rounded-2xl"
            onClick={() => {
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }}
          >
            Transfer Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export { Users };
