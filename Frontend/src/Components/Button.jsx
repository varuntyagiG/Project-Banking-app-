export default function Button(props) {
  return (
    <button
      className="bg-gray-900 text-white w-20 rounded-3xl ml-40 mt-6"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
