import Button from "../Components/Button";
import ButtonWarning from "../Components/ButtonWarning";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import SubHeading from "../Components/SubHeading";

export default function Signin() {
  return (
    <div className="bg-gray-300 w-1/3 m-9 ml-96 rounded-2xl mt-28">
      <Heading label="Sign in" />
      <SubHeading label="Enter your credentials to access your account" />
      <InputBox label="Email" placeholder="varuntyagi@gmail.com" />
      <InputBox label="Password" placeholder="123abc" />
      <Button label="Sign in" />
      <ButtonWarning
        label="Don't have an account ?"
        buttontext="Signup"
        to="/signup"
      />
    </div>
  );
}
