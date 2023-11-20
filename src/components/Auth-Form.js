import classes from "./Auth-Form.module.css";

const AuthForm = () => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.heading}>Login</h3>
      <form className={classes.form}>
        <label id="email">Email</label>
        <input type="email" />
        <label id="password">Password</label>
        <input type="password" />
        <input type="submit" value="Submit" />
      </form>
      <p className={classes.toogle}>
        Already have an account?{" "}
        <span>
          <a>Sign Up</a>
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
