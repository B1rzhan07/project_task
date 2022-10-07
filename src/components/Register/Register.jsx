import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [check, setCheck] = React.useState(false);
  const navigate = useNavigate();
  let id;
  const foo = async () => {
    await axios
      .post("https://reqres.in/api/registration", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        setCheck(true);
        navigate("/user");
        id = response.data.id;

        console.log(id);
      })
      .catch((err) => {
        console.log(err);
        setCheck(false);
      });
  };

  const handleClick = (e) => {
    foo();
  };

  return (
    <div>
      <div className={classes.box} action="#" method="post">
        <h1>Register Page</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          onClick={handleClick}
          className={classes.submit}>
          Sign up
        </button>
        <h3>
          <Link to="/login">Go back to login</Link>
        </h3>
      </div>
    </div>
  );
};

export default Register;
