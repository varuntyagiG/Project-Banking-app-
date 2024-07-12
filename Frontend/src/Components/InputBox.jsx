export default function InputBox(props) {
  return (
    <div>
      <div className="font-bold ml-16">
        <label htmlFor="text">{props.label}</label>
      </div>
      <input
        type="text"
        name=""
        id="text"
        className="border-2 rounded-2xl  ml-16 mt-2 h-10 w-72 p-3"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
