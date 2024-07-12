import { useState } from "react";
import Input from "../Components/input";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signin() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  return (
    <div>
      <h2>Sign in</h2>
      <Input
        label="Email"
        placeholder="abc@gmail.com"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <Input
        label="Password"
        placeholder="abc123"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
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
        Sign in
      </button>
      <div>
        Not have account ?{" "}
        <Link to={"/signup"} className="underline font-bold">
          SignUp
        </Link>
      </div>
    </div>
  );
}
