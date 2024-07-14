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
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-1/3 m-auto">
        <div className="text-center bg-gray-200 rounded-2xl p-6 shadow-lg">
          <h2 className="font-semibold text-3xl">Sign up</h2>
          <p className="text-gray-400 italic">
            Sign into your favorite bank app
          </p>
          <Input
            label="Firstname"
            placeholder="FirstName"
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
          <Input
            placeholder="LastName"
            onChange={(e) => {
              setlastname(e.target.value);
            }}
          />
          <Input
            placeholder="varuntyagi@gmail.com"
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
            className="h-7 w-36 bg-green-500 rounded-2xl"
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
              // Store token in Browzer local storage
              localStorage.setItem("token", res.data.token);
            }}
          >
            Sign-up
          </button>
          <p className="leading-10 text-lg">
            Already have an account ? &nbsp;
            <Link className="underline italic font-bold" to={"/signin"}>
              signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
