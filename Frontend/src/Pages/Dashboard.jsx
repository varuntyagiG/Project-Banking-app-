import AppBar from "../Components/AppBar";
import Balance from "../Components/Balance";
import { UserComponents } from "../Components/UserComponents";

export default function Dashboard() {
  return (
    <>
      <AppBar />
      <div>
        <Balance />
        <UserComponents />
      </div>
    </>
  );
}
