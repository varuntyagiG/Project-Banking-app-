function Users(props) {
  return (
    <div>
      <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
      <div>
        <button className="bg-gray-400 w-20 rounded-2xl">
          Transfer Amount
        </button>
      </div>
    </div>
  );
}

export { Users };
