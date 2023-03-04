import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Register from "./Register";
import LogIn from "./LogIn";
export default function Form() {
  let [isUser, setIsUser] = useState(false);

  return (
    <section>
      <ButtonGroup aria-label="Form-toggle" className="">
        <Button variant="secondary" onClick={()=> setIsUser(false)}>Register</Button>
        <Button variant="secondary" onClick={()=> setIsUser(true)}>Log In</Button>
      </ButtonGroup>
      {isUser ? <Register /> : <LogIn />}
    </section>
  );
}
