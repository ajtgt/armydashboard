import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import RegularSessions from "../../components/regularsessions/RegularSessions";
import MonthlySessions from "../../components/monthlysessions/MonthlySessions";
import MissedSessions from "../../components/missedsessions/MissedSessions";

const Attendance = () => {
  // const [info, setInfo] = useState("");
  const token = localStorage.getItem("token");
  // const url = "http://sams-ttipl.ddns.net/api/healthprofiles";
  const url = "http://sams-ttipl.ddns.net/api/medicalexamination";
  const body = {
    probationer_id: "850",
    month: "06",
    year: "2022",
  };
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ` + token,
      "Content-Type": "application/json",
    },
  };

  const onClickHandle = (response) =>
    axios
      .post(url, body, config)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  // .then((res) => {
  //   console.log(res.data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  // const url = "http://sams-ttipl.ddns.net/api/user-attendance";

  // const url = "http://sams-ttipl.ddns.net/api/healthprofiles";

  //! Value of axios function
  // const token = localStorage.getItem("token");
  // const url = "https://sams-ttipl.ddns.net/api/medicalexamination/";
  // const body = {
  //   probationer_id: "850",
  //   month: "06",
  //   year: "2022",
  // };
  // const config = {
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer ` + token,
  //     "Content-Type": "application/json",
  //   },
  // };
  //! Fuction 1

  // axios.post(url, body, config).then(console.log()).catch(console.log);
  //! Fuction 2
  // const fetchAttendanceData = async () => {
  //   try {
  //     const { data } = await axios.doPost(url, body, config);
  //     console.log(data.info);
  //     console.log("Server Responded");
  //   } catch (error) {}
  // };

  //! Fuction 3
  // const instance = axios.post({
  //   url: "http://sams-ttipl.ddns.net/api/medicalexamination",
  //   body: {
  //     probationer_id: "850",
  //     month: "06",
  //     year: "2022",
  //   },
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer ` + token,
  //     "Content-Type": "application/json",
  //   },
  // });

  // instance
  //   .get("http://sams-ttipl.ddns.net/api/medicalexamination")
  //   .then((response) => {
  //     console.log(response.data);
  //   });

  // instance.then((response) => {
  //   console.log(response.data);
  //   console.log(`Server Responded`);
  // });

  return (
    <Router>
      <div className="conatiner px-5">
        <div className="container-fluid bg-light rounded my-5 mx-auto mx-6">
          <div className="header  d-flex justify-content-center text-center ">
            <h3 className="mt-2">Attendance Report</h3>
          </div>

          <div class="container">
            <div class="row ">
              <div class="col">
                <Link to="/attendance/regularsessions">
                  <button type="button" class="btn btn-light">
                    <h4>Regular Sessions</h4>
                  </button>
                </Link>
              </div>
              <div class="col">
                <Link to="/attendance/monthlysessions">
                  <button type="button" class="btn btn-light">
                    <h4>Monthly Sessions</h4>
                  </button>
                </Link>
              </div>
              <div class="col">
                <Link to="/attendance/missedsessions">
                  <button type="button" class="btn btn-light">
                    <h4>Missed Sessions</h4>
                  </button>
                </Link>
              </div>

              <button
                type="button"
                class="btn btn-warning"
                onClick={onClickHandle}
              >
                Warning
              </button>
            </div>
          </div>

          <Switch>
            <Route
              exact
              path="/attendance/regularsessions"
              component={withRouter(RegularSessions)}
            ></Route>
            <Route
              exact
              path="/attendance/missedsessions"
              component={withRouter(MissedSessions)}
            ></Route>
            <Route
              exact
              path="/attendance/monthlysessions"
              component={withRouter(MonthlySessions)}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Attendance;
