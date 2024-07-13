import axios from "axios";
import { useState } from "react";

function Profile() {
  let [firstname, setfirstname] = useState();
  let [lastname, setlastname] = useState();
  let [password, setpassword] = useState();
  return (
    <div>
      <label htmlFor="">First-Name</label>
      <input
        type="text"
        onChange={(e) => {
          setfirstname(e.target.value);
        }}
      />
      <br />
      <label htmlFor="">Last-Name</label>
      <input
        type="text"
        onChange={(e) => {
          setlastname(e.target.value);
        }}
      />
      <br />
      <label htmlFor="">Password</label>
      <input
        type="text"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      {console.log(firstname, lastname, password)}
      <br />
      <button
        className="bg-gray-600"
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
  );
}

export { Profile };
