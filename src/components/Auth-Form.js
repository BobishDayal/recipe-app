import FormWrapper from "../ui/Form-Wrapper";
import classes from "./Auth-Form.module.css";

import { useState } from "react";

const AuthForm = () => {
  const [isUser, setIsUser] = useState(true);

  const toogleHandler = () => {
    setIsUser(!isUser);
  };

  return (
    <FormWrapper>
      <h3 className={classes.heading}>{isUser ? "Login" : "Sign Up"}</h3>

      <form className={classes.form}>
        <label id="email">Email</label>
        <input type="email" />
        <label id="password">Password</label>
        <input type="password" />
        <input type="submit" value="Submit" />
      </form>
      <p className={classes.toogle}>
        {!isUser ? " Already have an account?" : "Don't have an account?"}
        <span>
          <a onClick={toogleHandler}>{!isUser ? " Login" : " Sign Up"}</a>
        </span>
      </p>
    </FormWrapper>
  );
};

export default AuthForm;
