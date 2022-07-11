import React, { useState, useEffect } from "react";
import axios from "axios";

const TimeTable = () => {
  const [user, setUser] = useState([]);
  const [day, setDay] = useState("");

  const token = localStorage.getItem("token");

  const url = "http://sams-ttipl.ddns.net/api/gettimetables";

  const body = {
    squad_id: "128",
    day,
  };

  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ` + token,
      "Content-Type": "application/json",
    },
  };

  const selectChange = (e) => {
    setDay(e.target.value);
  };

  // const fetchData = () => {

  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSubmit = () => {
    axios
      .post(url, body, config)
      .then((response) => {
        setUser(response);
        // console.log("Yeah I got the Response");
        console.log(user?.data?.data?.[0].timetable?.[0].session_number);
        console.log(response);
        console.log(user);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  return (
    <div className="container-fluid  mt-4 p-3 rounded">
      <div className="container bg-light p-3">
        <div className="">
          <h5>View Time Table</h5>
        </div>
        <div className="row">
          <div className="container mt-3">
            <form>
              <label for="sel1" className="form-label">
                Select Day
              </label>
              <select
                className="form-select"
                id="sel1"
                name="sellist1"
                onChange={selectChange}
                value={day}
              >
                <option>Select Day</option>
                <option>Today</option>
                <option>Tommorrow</option>
                <option>Week</option>
              </select>

              <br />
              <div className="d-flex aligns-items-center justify-content-center">
                <button
                  type="button"
                  class="btn btn-success"
                  onSubmit={handleSubmit}
                  data-bs-toggle="collapse"
                  data-bs-target="#tablecontent"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container mt-3 collapse" id="tablecontent">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>Weekdays</th>

                <th>Session 1</th>
                <th>Session 2</th>
                <th>session 3</th>
                <th>Session 4</th>
                <th>Session 5</th>
              </tr>
            </thead>
            <tbody>
              {user?.data?.data?.length > 0 &&
                user?.data?.data?.map((x, e) => {
                  return (
                    <tr key={e}>
                      <th>
                        {x.day}
                        <br />
                        <small>{x.date}</small>
                      </th>

                      {x.timetable?.length > 0 &&
                        x.timetable?.map((y, e) => {
                          return (
                            <>
                              <td key={e}>
                                {y.activity_name}
                                <br />
                                {y.session_time}
                              </td>
                            </>
                          );
                        })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
