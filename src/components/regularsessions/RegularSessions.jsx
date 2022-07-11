import React from "react";
import "./RegularSessions.css";

const RegularSessions = () => {
  return (
    <div>
      <div class="container ">
        <div className="row justify-content-center">
          <div class="col-4">
            <div class="row">
              <h5>Select Year:</h5>
            </div>
            <div class="row ">
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle border"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Year
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      2020
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      2021
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      2022
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="row">
              <h5>Select Month</h5>
            </div>
            <div class="row">
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle border"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Month
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Select Month
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      January
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      February
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      March
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      April
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      May
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      May
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      June
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      June
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      July
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      August
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      September
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      October
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      November
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      December
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularSessions;
