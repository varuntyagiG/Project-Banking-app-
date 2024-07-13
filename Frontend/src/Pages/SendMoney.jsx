import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SendMoney() {
  let [rupee, setrupee] = useState();
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");
  let name = searchParams.get("name");

  return (
    <div className="m-7">
      <div className="bg-gray-400 w-1/3 p-24">
        <h2>Send Money</h2>
        <b>
          <i></i>
          {name}
        </b>
        <p>Amount in (Rs):{rupee}</p>
        <br />

        <input
          type="text"
          className="border-gray-500 bg-zinc-200 rounded-2xl"
          onChange={(e) => {
            setrupee(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          className="bg-green-600 w-32 rounded-xl"
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
  );
}
