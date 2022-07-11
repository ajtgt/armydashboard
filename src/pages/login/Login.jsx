import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://sams-ttipl.ddns.net/api/login", userData)
      .then((response) => {
        if (response.data.token === "") {
          console.log(`Incorrect Credential`);
        } else {
          history.push("/", { replace: true });
          // console.log(response.data);
          console.log(`Logged In`);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.userdetails.name);
          localStorage.setItem("role", response.data.role);

          // console.log(access_token);
          // console.log(localStorage.getItem("tech"));
          console.log(response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  }

  return (
    <div className="Parent">
      <div className="child1">
        <div className="text text1">
          SPORTS AND ACTIVITY MANAGEMENT
          <br />
          SOFTWARE
        </div>
        <div className="text text2">
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span>D</span>
          <span>O</span>
          <span>O</span>
          <span>R</span>
          <span>&nbsp;</span>
          <span>T</span>
          <span>R</span>
          <span>A</span>
          <span>I</span>
          <span>N</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>&nbsp;</span>
          <span>D</span>
          <span>A</span>
          <span>S</span>
          <span>H</span>
          <span>B</span>
          <span>O</span>
          <span>A</span>
          <span>R</span>
          <span>D</span>
        </div>
        <div className="text text3">
          SARDAR VALLAVBHAI PATEL
          <br />
          NATIONAL POLICE ACADEMY
        </div>
      </div>
      <div className="child2">
        <h2 className="login-header">SIGN IN</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <p>
            <input
              placeholder="email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </p>

          <button type="submit">Login</button>
        </form>
        <footer>
          © 2022 Timing Technologies India │ All Rights Reserved
          <br />
          Version 1.0
        </footer>
      </div>
    </div>
  );
}

export default App;
