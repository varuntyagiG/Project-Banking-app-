import axios from "axios";
import { useState } from "react";

function Profile() {
  let [firstname, setfirstname] = useState();
  let [lastname, setlastname] = useState();
  let [password, setpassword] = useState();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/3 m-auto bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Edit Profile</h1>
          <input
            className="h-8 m-4 w-60 p-3 border-2 border-gray-300 rounded-xl"
            placeholder="FirstName"
            type="text"
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
          <br />

          <input
            className="h-8 m-4 w-60 p-3 border-2 border-gray-300 rounded-xl"
            placeholder="LastName"
            type="text"
            onChange={(e) => {
              setlastname(e.target.value);
            }}
          />
          <br />

          <input
            className="h-8 m-4 w-60 p-3 border-2 border-gray-300 rounded-xl"
            placeholder="Password"
            type="text"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <button
            className="bg-red-500 h-7 w-36 rounded-3xl"
            onClick={async () => {
              let authTokens = localStorage.getItem("token");
              await axios.put(
                "http://localhost:8000/api/v1/user/update",
                {
                  firstname,
                  lastname,
                  password,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens}`,
                  },
                },
              );
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export { Profile };
