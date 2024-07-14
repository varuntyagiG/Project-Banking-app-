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
    <div className="mt-5 ml-44">
      Your Bank Balance :
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 inline m-1"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
          clipRule="evenodd"
        />
      </svg>
      <b className="">{balance}</b>
    </div>
  );
}

export { Balance };
