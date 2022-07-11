import React from "react";

const MissedSessions = () => {
  return (
    <div>
      <div class="row d-flex justify-content-center text-center mx-3">
        <h6>Activity</h6>
      </div>
      <div class="row d-flex justify-content-center text-center mx-3">
        <div class="dropdown ">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Activity
          </button>
          <button>
            <img src="http://sams-ttipl.ddns.net/images/submit.png"></img>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Select Activity
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Running
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Football
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissedSessions;
