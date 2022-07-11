import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";

import Dashboard from "./pages/dashboard/Dashboard";
import Attendance from "./pages/attendance/Attendance";
import MyTargets from "./pages/mytargets/MyTargets";
import TimeTable from "./pages/timetable/TimeTable";
import Hospitalization from "./pages/hospitalization/Hospitalization";
import HealthProfiles from "./pages/healthprofiles/HealthProfiles";
import Statistics from "./pages/statistics/Statistics";
import FitnessEvaluation from "./pages/fitnessevaluation/FitnessEvaluation";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Layout>
          <Route exact path="/" component={Layout}></Route>
        </Layout>
      </Switch>
    </div>
  );
};

export default App;
