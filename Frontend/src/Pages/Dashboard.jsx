import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
import { AppBar } from "../Components/AppBar";

export default function Dashboard() {
  let [users, setuser] = useState([]);
  let [filter, setfilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/searching/?filter=" + filter)
      .then((ans) => {
        setuser(ans.data.user);
      });
  }, [filter]);

  return (
    <div>
      <AppBar />
      <Balance />
      <br />
      <div>
        <input
          type="text"
          className="h-10 w-2/3 p-3 rounded-3xl ml-56 border-2 border-gray-500"
          onChange={(e) => {
            setfilter(e.target.value);
          }}
        />
      </div>
      {users.map((user) => {
        return <Users user={user} />;
      })}
    </div>
  );
}
