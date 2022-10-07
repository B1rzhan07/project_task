import { Routes, Route } from "react-router-dom";
//import Header from "./components/Header";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/register"
          exact
          element={<Register />}
        />
        <Route path="/user" exact element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
