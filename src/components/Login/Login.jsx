import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Login.module.scss";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [check, setCheck] = React.useState(false);
  const [err, setErr] = React.useState(true);
  const foo = async () => {
    await axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        setCheck(true);
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        setCheck(false);
        setErr(false);
        setEmail("");
        setPassword("");
      });
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    foo();
  };

  return (
    <div className={classes.form}>
      <div className={classes.container}>
        <div className={classes.login}>
          <div>
            <h1>Login</h1>
            <hr />
            <p>Login to get more info :)))</p>
            <label for="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label for="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            {check}
            {email ? (
              <button onClick={handleClick}>Login</button>
            ) : (
              ""
            )}
            {!err ? (
              <p className={classes.error}>
                Wrong email or password
              </p>
            ) : (
              ""
            )}
            <h1>
              or <Link to="/register">Register</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
