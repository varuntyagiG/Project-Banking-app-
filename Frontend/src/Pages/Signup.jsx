import { Link } from "react-router-dom";
import Input from "../Components/input";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  return (
    <div>
      <h2>Sign up</h2>
      <p>Sign into your favorite bank app</p>
      <Input
        label="Firstname"
        placeholder="Varun"
        onChange={(e) => {
          setfirstname(e.target.value);
        }}
      />
      <Input
        label="lastname"
        placeholder="Tyagi"
        onChange={(e) => {
          setlastname(e.target.value);
        }}
      />
      <Input
        label="email"
        placeholder="varuntyagi@gmail.com"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <Input
        label="password"
        placeholder="abc123"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          let res = await axios.post(
            "http://localhost:8000/api/v1/user/signup",
            {
              firstname,
              lastname,
              email,
              password,
            },
          );

          localStorage.setItem("token", res.data.token);
        }}
      >
        Sign-up
      </button>
      <p>
        Already have an account ?
        <Link className="underline font-bold" to={"/signin"}>
          Signin
        </Link>
      </p>
    </div>
  );
}
