export default function SendMoney() {
  return (
    <div className="h-80 w-1/4 bg-gray-100 m-7 rounded-2xl">
      <div className="h-28">
        <h5 className="font-bold text-2xl h-28 p-12 ml-10">Send Money</h5>
      </div>
      <div className="h-48 mr-8 ml-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <span className="ml-2 font-semibold">Friend Name</span>
        <p className="mt-2 mb-2 ml-2 font-light">Amount (in Rs)</p>
        <div>
          <input
            type="text"
            placeholder="Enter Amount"
            className="mt-2 h-7 w-64 mr-12 rounded-2xl p-2"
          />
        </div>
        <button className="bg-green-600 border-2 border-gray-400 mt-6 ml-12 w-36 rounded-2xl hover:border-gray-700">
          Transfer Amount
        </button>
      </div>
    </div>
  );
}
