import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Balance() {
  let [balance, setbalance] = useState();
  useEffect(() => {
    let authTokens = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/api/v1/accountrouter/checkbalance", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens}`,
        },
      })
      .then((res) => {
        setbalance(res.data.balance);
      });
  }, []);
  return (
    <div>
      Your Amount : <b>{balance}</b>
    </div>
  );
}

export { Balance };
