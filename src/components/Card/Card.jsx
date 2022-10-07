import React from "react";
import classes from "./Card.module.scss";
// import { useSelector } from "react-redux";
const Card = ({
  avatar,
  first_name,
  last_name,
  email,
  id,
}) => {
  // const items = useSelector((state) => state.user); here I tried to use redux, but it didn't work.
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.favorite}>
          <img
            width={133}
            height={112}
            src={avatar}
            alt="first"
          />

          <ul>
            <li> Name: {first_name}</li>
            <li> Surname: {last_name}</li>
            <li> Email: {email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
