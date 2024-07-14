import { useState } from "react";
import Input from "../Components/input";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signin() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="font-semibold text-3xl">Log in</h2>
          <Input
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            className="h-7 w-36 bg-green-500 rounded-2xl hover:bg-green-600"
            onClick={async () => {
              let res = await axios.post(
                "http://localhost:8000/api/v1/user/signin",
                {
                  email,
                  password,
                },
              );
              localStorage.setItem("token", res.data.token);
            }}
          >
            Log in
          </button>
          <div className="leading-10 text-lg">
            Not have account ? &nbsp;
            <Link to={"/signup"} className="underline font-semibold italic">
              signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
