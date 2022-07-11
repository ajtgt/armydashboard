import React from "react";
import "./sidebar.css";

import Dashboard from "../../pages/dashboard/Dashboard";
import Attendance from "../../pages/attendance/Attendance";
import MyTargets from "../../pages/mytargets/MyTargets";
import TimeTable from "../../pages/timetable/TimeTable";
import Hospitalization from "../../pages/hospitalization/Hospitalization";
import HealthProfiles from "../../pages/healthprofiles/HealthProfiles";
import Statistics from "../../pages/statistics/Statistics";
import FitnessEvaluation from "../../pages/fitnessevaluation/FitnessEvaluation";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

const Sidebar = () => {
  function openNav() {
    document.getElementById("mySidenav").classList.remove("hover_collapse");
    document
      .getElementsByClassName("main")[0]
      .classList.remove("hover_collapse_main");
  }

  function closeNav() {
    document.getElementById("mySidenav").classList.add("hover_collapse");
    document
      .getElementsByClassName("main")[0]
      .classList.add("hover_collapse_main");
  }

  return (
    <div className="mainarea">
      <Router>
        <div
          id="mySidenav"
          className="sidenav hover_collapse"
          onMouseEnter={openNav}
          onMouseLeave={closeNav}
        >
          <div className="sidebar_inner ">
            <ul>
              <li>
                <Link to="/" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/dashboard.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/mytargets" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/target.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">My Targets</span>
                </Link>
              </li>
              <li>
                <Link to="/attendance" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/attendance.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Attendance</span>
                </Link>
              </li>
              <li>
                <Link to="/timetable" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/timetable.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Timetable</span>
                </Link>
              </li>
              <li>
                <Link to="/hospitalization" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/hospital.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Hospitalization</span>
                </Link>
              </li>
              <li>
                <Link to="/healthprofiles" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/healthprofiles.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Health Profiles</span>
                </Link>
              </li>
              <li>
                <Link to="/fitnessevaluation" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/running.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Fitness Evaluation</span>
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="list">
                  <span className="icon">
                    <img
                      src="http://sams-ttipl.ddns.net/images/statistics.png"
                      alt="dashboard"
                    ></img>
                  </span>
                  <span className="text">Statistics</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <div className="hover_collapse_main main ">
            <Route exact path="/attendance" component={Attendance}></Route>

            <Route exact path="/mytargets" component={MyTargets}></Route>

            <Route exact path="/timetable" component={TimeTable}></Route>

            <Route
              exact
              path="/hospitalization"
              component={Hospitalization}
            ></Route>

            <Route
              exact
              path="/healthprofiles"
              component={HealthProfiles}
            ></Route>

            <Route
              exact
              path="/fitnessevaluation"
              component={FitnessEvaluation}
            ></Route>

            <Route exact path="/statistics" component={Statistics}></Route>

            <Route exact path="/" component={Dashboard}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Sidebar;
