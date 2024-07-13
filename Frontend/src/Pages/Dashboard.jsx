import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";

export default function Dashboard() {
  let [users, setuser] = useState([]);
  {
    console.log(users);
  }
  useEffect(() => {
    // axios.get("http://localhost:8000/api/v1/user/searching/").then((ans) => {
    //   setuser(ans.data.user);
    // });
    alert("fbmen");
  }, []);
  {
    console.log("jkkcb");
  }
  return (
    <div>
      <Balance />
      <br />
      <br />
      <div>
        <input type="text" className="border-red-700 h-12 w-2/3" />
      </div>
    </div>
  );
}
