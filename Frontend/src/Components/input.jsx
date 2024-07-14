export default function Input({ placeholder, onChange }) {
  return (
    <div className="">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="h-10 w-80 border-2 border-gray-300 m-3 p-3 rounded-2xl"
      />
    </div>
  );
}
