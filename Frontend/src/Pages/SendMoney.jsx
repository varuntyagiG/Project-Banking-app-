import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SendMoney() {
  let [rupee, setrupee] = useState();
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");
  let name = searchParams.get("name");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white shadow-md w-96 rounded-2xl">
        <div className="text-center">
          <h2 className="font-semibold text-3xl mb-8">Send Money</h2>
          To : <span className="text-lg font-medium"> {name}</span>
          <p className="">Amount in (Rs): {rupee}</p>
          <br />
          <input
            type="text"
            className="border-2 border-gray-400 h-8 p-3 rounded-2xl"
            onChange={(e) => {
              setrupee(e.target.value);
            }}
          />
          <br />
          <br />
          <button
            className="h-9 w-36 rounded-xl bg-green-500"
            onClick={async () => {
              let authTokens = localStorage.getItem("token");

              await axios.post(
                "http://localhost:8000/api/v1/accountrouter/transfer",
                {
                  to: id,
                  amount: rupee,
                },
                {
                  headers: {
                    Authorization: `Bearer ${authTokens}`,
                  },
                },
              );
            }}
          >
            Invite Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
