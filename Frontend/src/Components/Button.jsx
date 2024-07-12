export default function Button({ onClick, label }) {
  return (
    <button
      className="bg-gray-900 text-white w-20 rounded-3xl ml-40 mt-6"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
