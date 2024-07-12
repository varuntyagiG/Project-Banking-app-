function Users({ user }) {
  return (
    <div className="flex">
      <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
        <div className="flex flex-col justify-center h-full text-xl">
          {user.firstName[0]}
        </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
    </div>
  );
}

export { Users };
