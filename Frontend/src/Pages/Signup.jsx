import { useState } from "react";
import Button from "../Components/Button";
import ButtonWarning from "../Components/ButtonWarning";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import SubHeading from "../Components/SubHeading";
import axios from "axios";

export default function Signup() {
  let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  return (
    <div>
      <div className="bg-gray-300 w-1/3 m-9 ml-96 rounded-2xl mt-28">
        <Heading label="Sign Up" />
        <SubHeading label="Enter your information to create account" />
        <InputBox
          label="First Name"
          placeholder="Varun"
          onChange={(e) => {
            setfirstname(e.target.value);
          }}
        />
        <InputBox
          label="Last Name"
          placeholder="Tyagi"
          onChange={(e) => {
            setlastname(e.target.value);
          }}
        />
        <InputBox
          label="Email"
          placeholder="varuntyagi@gmail.com"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <InputBox
          label="Password"
          placeholder="123456"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <Button
          label="SignUp"
          onClick={async () => {
            let response = await axios.post(
              "http://localhost:8000/api/v1/user/signup",
              {
                firstname,
                lastname,
                email,
                password,
              },
            );
            localStorage.setItem("Token", response.data.token);
          }}
        />
        <ButtonWarning
          label="Already have an account ?"
          buttontext="Signin"
          to="/signin"
        />
      </div>
    </div>
  );
}
