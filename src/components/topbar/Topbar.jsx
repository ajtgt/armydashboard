import React from "react";
import "./topbar.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  useHistory,
} from "react-router-dom";

export default function Topbar() {
  const history = useHistory();
  const navigateTo = () => history.push("/login");

  return (
    <>
      <div className="topbar">
        <nav className="navbar fixed-top navbar-light bg-light row no-glutters">
          <div className="col-md-7">
            <img
              src="http://sams-ttipl.ddns.net/images/svpnpa.png"
              alt="dashboard"
            />
            <span>
              Sardar Vallabhbhai Patel <br /> National Police Academy
            </span>
          </div>
          <div className="col-md-2 username d-flex justify-content-start">
            <h5>Probationer</h5>
          </div>
          <div className="col-md-1 notification-icon d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </div>
          <div className="col-md-2 profile d-flex justify-content-start">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <div>
              <div class="dropdown">
                <div
                  class=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Ajay Kumar</b>
                </div>
                <ul class="dropdown-menu">
                  {/* <li><a class="dropdown-item" href="#">Update Profile</a></li> */}
                  <li>
                    <Link to="/login" className="link">
                      <a class="dropdown-item">Logout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

{
  /* <div className="topbar">
<div className="topbarWrapper">

<div className="topLeft">

<img src="http://sams-ttipl.ddns.net/images/svpnpa.png" alt="dashboard" />
<span>Sardar Vallabhbhai Patel <br /> National Police Academy</span>

</div>
<div className="topRight">
    <div className="username">Probatoner</div>
    <div className="notification-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
       <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
   </svg>
    </div>
    <div className="">
        <span className="topAvatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
               <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
           </svg>
       </span>
       <span>Murali</span>
   </div>
</div>

</div>
</div> */
}
