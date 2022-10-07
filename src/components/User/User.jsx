import React from "react";
import axios from "axios";
import classes from "./User.module.scss";
//import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
// import {
//   setUser,
//   fetchUsers,
// } from "../../redux/Slices/userSlice";
const User = () => {
  //const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const foo = async () => {
    // I wrote with direct ajax, because the redux didn't work, which caused in itereation  of Card : "undefined"
    try {
      // However, I tried to use redux, but it didn't work
      await axios //you can see the code on the file redux
        .get("https://reqres.in/api/users")
        .then((res) => {
          setData(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    foo();
  }, []);
  // const items = useSelector((state) => state.user.items);

  return (
    <div>
      <h1>List of all Users</h1>
      <div className={classes.user}>
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default User;
