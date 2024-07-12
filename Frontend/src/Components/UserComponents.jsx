import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Users } from "./Users";

function UserComponents() {
  let [users, setusers] = useState([]);
  let [filter, setfilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/searching?filter=" + filter)
      .then((res) => {
        setusers(res.data.user);
      });
  }, [filter]);

  return (
    <div className="ml-40 mt-12 ">
      <h1 className="font-semibold">{users.email}</h1>
      <input
        type="text"
        placeholder="Search users..."
        className="border-2 border-gray-300 mt-3 h-8 w-3/4 rounded-2xl p-2"
        onChange={(e) => {
          setfilter(e.target.value);
        }}
      />
      {users.length > 0
        ? users.map((user) => <Users key={user.id} user={user} />)
        : console.log("user not found")}
    </div>
  );
}

export { UserComponents };
