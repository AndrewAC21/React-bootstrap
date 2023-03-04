import { useState } from "react";
import Register from "./Register";
import LogIn from "./LogIn";
export default function Form() {
  [isUser, setIsUser] = useState();

  return <section>{isUser ? <Register /> : <LogIn />}</section>;
}
