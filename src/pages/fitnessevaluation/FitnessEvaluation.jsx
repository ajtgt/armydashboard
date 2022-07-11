import DatePicker from "react-datepicker";
// import fitnessevaluation from "./fitnessevaluation.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const FitnessEvaluation = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [user, setUser] = useState([]);

  const token = localStorage.getItem("token");

  const url = "http://sams-ttipl.ddns.net/api/viewfitnessevaluvation";

  const body = {
    probationer_id: "851",
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

  const fetchData = () => {
    axios
      .post(url, body, config)
      .then((response) => {
        setUser(response?.data);
        // console.log("got the data");
        // console.log(response.data.data.healthprofiles.familyinfo[0]?.id);
        // setUser(response.data);
        // console.log(response.data.data.healthprofiles.familyinfo[0].id);

        // console.log(response?.data?.data[0].fitness_details[0].fitness_value);
        // console.log(user?.data?.[0].fitness_details?.[0].fitness_value);
        // console.log(user?.data[1].fitness_details[0].fitness_value);
        // console.log(user?.data[2].fitness_details[0].fitness_value);
        // console.log(user?.data[3].fitness_details[0].fitness_value);

        // console.log(response?.data?.data[1].fitness_details[0].fitness_value);
        // console.log(response?.data?.data[2].fitness_details[0].fitness_value);
        // console.log(response?.data?.data[3].fitness_details[0].fitness_value);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container px-5">
      <div className="container-fluid bg-light rounded my-5 mx-5 mx-auto">
        <div className="header">
          <h4>Fitness Analytics</h4>
        </div>
        <div class="container-xxl">
          <div class="container-xxl d-flex justify-content-center">
            <div className="row ">
              <div class="col ">
                <div class="row text-start">Select Year:</div>
                <div class="row d-flex justify-content-center text-start">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    calendarClassName
                  />
                  <button type="button" class="btn btn-success">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="m-4">
          <ul class="nav nav-pills nav-justified" id="myTab">
            <li class="nav-item">
              <a href="#fitness" class="nav-link active" data-bs-toggle="pill">
                Fitness
              </a>
            </li>
            <li class="nav-item">
              <a href="#endurance" class="nav-link" data-bs-toggle="pill">
                Endurance
              </a>
            </li>
            <li class="nav-item">
              <a href="#strength" class="nav-link" data-bs-toggle="pill">
                Strength
              </a>
            </li>
            <li class="nav-item">
              <a href="#flexibility" class="nav-link" data-bs-toggle="pill">
                Flexibility
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="fitness">
              <div className="row">
                <div className="col">weight</div>
                <div className="col">
                  {user?.data?.[0].fitness_details?.[0].fitness_value}
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="endurance">
              <div className="row">
                <div className="col">endurancegrade</div>
                <div className="col">
                  {user?.data?.[1].fitness_details?.[0].fitness_value}
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="strength">
              <div className="row">
                <div className="col">strengthgrade</div>
                <div className="col">
                  {user?.data?.[2].fitness_details?.[0].fitness_value}
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="flexibility">
              <div className="row">
                <div className="col">flexibility</div>
                <div className="col">
                  {user?.data?.[3].fitness_details?.[0].fitness_value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessEvaluation;
