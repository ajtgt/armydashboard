import React from "react";
// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import { Nav, Container, Col, Row } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Attendance from "../../pages/attendance/Attendance";
// import MyTargets from "../../pages/mytargets/MyTargets";
// import TimeTable from "../../pages/timetable/TimeTable";
// import Hospitalization from "../../pages/hospitalization/Hospitalization";
// import HealthProfiles from "../../pages/healthprofiles/HealthProfiles";
// import Statistics from "../../pages/statistics/Statistics";
// import FitnessEvaluation from "../../pages/fitnessevaluation/FitnessEvaluation";
// import Main from "../../components/main/Main";

const Dashboard = () => {
  return (
    <div className="container-fluid">
    <div className="container mx-auto ">
      <div className="row mt-5 pl-4 ">
        <div className="col-4 border border-light rounded mh-50 overflow-auto">
          <div classname="card ">
            <div classname="card-body ">
              <h5>Notifications</h5>

              <div className="card-header bg-light">
                <h7 className="card-title px-2 fw-normal">Attendance</h7>
                <p className="card-text ">
                  Now you can see your attendance also. it is up-to-date till
                  now
                </p>
              </div>

              <div className="card-header bg-light">
                <h7 className="card-title px-2 fw-normal">
                  Please update profile
                </h7>
                <p className="card-text">
                  All probationer are requested plz update your profile via
                  Mobile app/ desktop in Outdoor dashboard.
                </p>
              </div>

              <div className="card-header bg-light">
                <h7 className="card-title px-2 fw-normal">
                  Please update profile
                </h7>
                <p className="card-text">
                  All probationer are requested plz update your profile via
                  Mobile app/ desktop in Outdoor dashboard.
                </p>
              </div>

              <div className="card-header bg-light">
                <h7 className="card-title px-2 fw-normal">
                  Please update profile
                </h7>
                <p className="card-text">
                  All probationer are requested plz update your profile via
                  Mobile app/ desktop in Outdoor dashboard.
                </p>
              </div>

              <div className="card-header bg-light">
                <h7 className="card-title px-2 fw-normal">PBA D Grading</h7>
                <p className="card-text">
                  9mm Auto Pistol Assembling D Grading >= 30Sec 1. Angad Mehta
                  35 sec. Glock Stripping D Grading >= 20Sec 1. Ms Neetu 22 sec
                  Carbine Assembling D Grading >= 36 Sec 1. Ramesh 50 sec 2. Ms
                  Neetu 62 sec 3. Ms Sonakshi Singh 41 sec
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div class="row ">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Session Attended</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Session Missed</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card-group my-3 ">
            <div class="card me-4 ">
              <div class="card-body ">
                <div class="card-title d-flex justify-content-start">
                  <img
                    src="http://sams-ttipl.ddns.net/images/calendar-homepage.png"
                    alt="dashboard"
                  ></img>
                  <h5>Todays Schedule</h5>
                </div>
                <div class="p-2 mb-2 bg-info text-primary bg-opacity-25 rounded border border-opacity-50">
                  No schedule for today
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-title d-flex justify-content-start">
                  <img
                    src="http://sams-ttipl.ddns.net/images/birthday.png"
                    alt="dashboard"
                  ></img>
                  <h5>Happy Birthdays</h5>
                </div>
                <div class="row">
                  <div class="col">robinson guria</div>
                  <div class="col">probationer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
