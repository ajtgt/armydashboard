import React, { useState, useEffect } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";

const Statistics = () => {
  const [startDate, setStartDate] = useState(new Date("2022/06/01"));
  const [endDate, setEndDate] = useState(new Date("2022/06/30"));
  const [user, setUser] = useState([]);

  const token = localStorage.getItem("token");

  const url = "http://sams-ttipl.ddns.net/api/probationersinglereport";

  const body = {
    probationer_id: "851",
    activity_id: "1721",
    sub_activity_id: "1722",
    component_id: "1723",
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
        setUser(response);
        console.log("Yeah I got the Response");
        console.log(user);

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

  const activities = [
    { id: "1", name: "Running_5km" },
    { id: "2", name: "Shooting" },
    { id: "3", name: "High_Jump" },
    { id: "4", name: "Run_Run" },
    { id: "5", name: "Long_Jump" },
    { id: "6", name: "Meditation" },
    { id: "7", name: "Yoga" },
    { id: "8", name: "Swimming" },
  ];

  const subactivities = [
    { id: "1", activityId: "4", name: "1 km" },
    { id: "2", activityId: "8", name: "front stroke" },
    { id: "3", activityId: "8", name: "butterfly" },
    // { id: "4", activityId: "1", name: "--No Sub Activity--" },
    // { id: "5", activityId: "2", name: "--No Sub Activity--" },
    // { id: "6", activityId: "3", name: "--No Sub Activity--" },
    // { id: "7", activityId: "5", name: "--No Sub Activity--" },
    // { id: "8", activityId: "6", name: "--No Sub Activity--" },
    // { id: "8", activityId: "7", name: "--No Sub Activity--" },
  ];

  const components = [
    { id: "1", subactivityId: "1", name: "10 km" },
    { id: "2", subactivityId: "1", name: "20 km" },
    { id: "3", subactivityId: "2", name: "front stroke 1" },
    { id: "4", subactivityId: "2", name: "front stroke 2" },
    // { id: "3", subsctivityId: "2", name: "--No Component--" },
    // { id: "4", subsctivityId: "3", name: "--No Component--" },
    // { id: "5", subsctivityId: "4", name: "--No Component--" },
    // { id: "6", subsctivityId: "5", name: "--No Component--" },
    // { id: "7", subsctivityId: "6", name: "--No Component--" },
    // { id: "8", subsctivityId: "7", name: "--No Component--" },
  ];

  const [activity, setActivity] = useState([]);
  const [subactivity, setSubactivity] = useState([]);
  const [component, setComponent] = useState([]);

  useEffect(() => {
    setActivity(activities);
  }, []);

  const handleActivity = (id) => {
    const dt = subactivities.filter((x) => x.activityId === id);
    setSubactivity(dt);
  };

  const handleSubactivity = (id) => {
    const dt = components.filter((x) => x.subactivityId === id);
    console.log("Handle Submit");
    setComponent(dt);
  };

  const handleClick = () => {};

  return (
    <div className="container">
      <div className="container-fluid mt-5 bg-light rounded p-4">
        <div className="row">
          <h5 className="mb-3">Report</h5>
        </div>
        <div className="row">
          <div className="col-2 mb-3">
            <h7>Activity</h7>
            <select
              id="ddlActivity"
              className="form-control select-class"
              onChange={(e) => handleActivity(e.target.value)}
            >
              <option value="0">Select Activity</option>
              {activity && activity !== undefined
                ? activity.map((atr, index) => {
                    return (
                      <option key={index} value={atr.id}>
                        {atr.name}
                      </option>
                    );
                  })
                : "No Activity"}
            </select>
          </div>
          <div className="col-2">
            <h7>Sub Activity</h7>

            <select
              id="ddlSubactivity"
              className="form-control select-class"
              onChange={(e) => handleSubactivity(e.target.value)}
            >
              <option value="0">Select Sub Activity</option>
              {subactivity && subactivity !== undefined
                ? subactivity.map((atr, index) => {
                    return (
                      <option key={index} value={atr.id}>
                        {atr.name}
                      </option>
                    );
                  })
                : "No Sub Activity"}
            </select>
          </div>
          <div className="col-2">
            <h7>Components</h7>
            <select id="ddlComponent" className="form-control select-class">
              <option value="0">Select Component</option>
              {component && component !== undefined
                ? component.map((atr, index) => {
                    return (
                      <option key={index} value={atr.id}>
                        {atr.name}
                      </option>
                    );
                  })
                : "No Component"}
            </select>
          </div>
          <div className="col-3">
            <h7>Date </h7>
            <div className="d-flex">
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="mt-5" type="button" onClick={handleClick}>
              <img
                src="http://sams-ttipl.ddns.net/images/submit.png"
                width="30"
              ></img>
            </div>
          </div>

          <div className="container">
            <div class="d-flex aligns-items-center justify-content-center bg-primary text-white m-3">
              <p>Activity</p>
            </div>
            <table class="table table-light ">
              <thead>
                <tr>
                  <th></th>
                  <th colspan="3">Running_5km - (minutes)</th>
                </tr>
                <tr>
                  <th scope="col">Probationer Name</th>
                  <th scope="col">20-06</th>
                  <th scope="col">23-06</th>
                  <th scope="col">27-06</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abhirudh</td>
                  <td>{user?.data?.data?.[0].activity_name}</td>
                  <td>{user?.data?.data?.[0].activity_unit}</td>
                  <td>{user?.data?.data?.[0].activity_name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

//! /////////////////////////////////////////////////////////////////////////////////////////////////
// const countriesData = [
//   {
//     name: "Germany",
//     states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
//   },
//   {
//     name: "India",
//     states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
//   },
//   {
//     name: "France",
//     states: ["Auvergne", "Bretagne", "Corse", "Centre"],
//   },
// ];

// const Statistics = () => {
//   const [{ country, state }, setData] = useState({
//     country: "Germany",
//     state: "",
//   });

//   const countries = countriesData.map((country) => (
//     <option key={country.name} value={country.name}>
//       {country.name}
//     </option>
//   ));

//   const states = countriesData
//     .find((item) => item.name === country)
//     ?.states.map((state) => (
//       <option key={state} value={state}>
//         {state}
//       </option>
//     ));

//   function handleCountryChange(event) {
//     setData((data) => ({ state: "", country: event.target.value }));
//   }

//   function handleStateChange(event) {
//     setData((data) => ({ ...data, state: event.target.value }));
//   }
//   return (
//     <form onSubmit={() => console.log("Submitted")}>
//       <div>
//         <select value={country} onChange={handleCountryChange}>
//           {countries}
//         </select>
//       </div>

//       <div>
//         <select value={state} onChange={handleStateChange}>
//           {states}
//         </select>
//       </div>
//       <input type="submit" />
//     </form>
//   );
// };

// export default Statistics;

//! //////////////////////////////////////////////////////////////////////////////////////////////

// const countriesData = [
//   {
//     name: "Germany",
//     states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
//     cities: ["asd", "fds", "erty", "bvcx"],
//   },
//   {
//     name: "India",
//     states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
//     cities: ["asd", "fds", "erty", "bvcx"],
//   },
//   {
//     name: "France",
//     states: ["Auvergne", "Bretagne", "Corse", "Centre"],
//   },
// ];

// const Statistics = () => {
//   const [{ country, state, city }, setData] = useState({
//     country: "Germany",
//     state: "",
//     city: "",
//   });

//   const countries = countriesData.map((country) => (
//     <option key={country.name} value={country.name}>
//       {country.name}
//     </option>
//   ));

//   const states = countriesData
//     .find((item) => item.name === country)
//     ?.states.map((state) => (
//       <option key={state} value={state}>
//         {state}
//       </option>
//     ));

//   function handleCountryChange(event) {
//     setData((data) => ({ state: "", country: event.target.value }));
//   }

//   function handleStateChange(event) {
//     setData((data) => ({ ...data, state: event.target.value }));
//   }

//   return (
//     <form onSubmit={() => console.log("Submitted")}>
//       <div>
//         <select value={country} onChange={handleCountryChange}>
//           {countries}
//         </select>
//       </div>

//       <div>
//         <select value={state} onChange={handleStateChange}>
//           {states}
//         </select>
//       </div>
//       <input type="submit" />
//     </form>
//   );
// };

// export default Statistics;

// const Statistics = () => {
//   const [state, setState] = useState({
//     countries: [],
//     states: [],
//     cities: [],
//     selectedCountry: "Country",
//     selectedState: "State",
//   });

//   useEffect(() => {
//     setState({
//       countries: [
//         {
//           name: "Philippines",
//           states: [
//             {
//               name: "Central Luzon",
//               cities: ["Angeles City", "Olongapo", "San Fernando"],
//             },
//             {
//               name: "NCR",
//               cities: ["Pasay City", "Makati", "Marikina"],
//             },
//           ],
//         },
//         {
//           name: "United States of America",
//           states: [
//             {
//               name: "California",
//               cities: ["Sacramento", "Los Angeles", "Bakersfield", "Carson"],
//             },
//             {
//               name: "Florida",
//               cities: ["Tallahassee", "Jacksonville"],
//             },
//             { name: "Illinois", cities: ["Springfield", "Chicago"] },
//             { name: "New Jersey", cities: ["Trenton", "Newark"] },
//           ],
//         },
//       ],
//     });
//   }, []);
//   const changeCountry = (event) => {
//     setState({ selectedCountry: event.target.value });
//     setState({
//       states: state.countries.find((cntry) => cntry.name === event.target.value)
//         .states,
//     });
//   };

//   const changeState = (event) => {
//     setState({ selectedState: event.target.value });
//     const stats = state.countries.find(
//       (cntry) => cntry.name === state.selectedCountry
//     ).states;
//     setState({
//       cities: stats.find((stat) => stat.name === event.target.value).cities,
//     });
//   };

//   return (
//     <div className="container">
//       <div className="container-fluid">
//         <div className="row">
//           <h2>ReactJS Dependent Dropdown - Country, State and City</h2>

//           <div className="form-group">
//             <label>Country</label>
//             <select
//               className="form-select"
//               placeholder="Country"
//               value={state.selectedCountry}
//               onChange={changeCountry}
//             >
//               <option>Country</option>
//               {state?.countries?.map((e, key) => {
//                 return <option key={key}>{e.name}</option>;
//               })}
//             </select>
//           </div>

//           <div className="form-group">
//             <label>State</label>
//             <select
//               className="form-select"
//               placeholder="State"
//               value={state.selectedState}
//               onChange={changeState}
//             >
//               <option>State</option>
//               {state?.countries?.states?.map((e, key) => {
//                 return <option key={key}>{e.name}</option>;
//               })}
//             </select>
//           </div>

//           <div className="form-group">
//             <label>City</label>
//             <select className="form-select" placeholder="City">
//               <option>City</option>
//               {/* {this.state.cities.map((e, key) => {
//               return <option key={key}>{e}</option>;
//             })} */}
//             </select>
//           </div>
//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;

// return (
//   <div className="container mt-5 bg-white rounded p-4">
//     <div className="container-fluid">
//       <div>
//         <h5>Reports</h5>
//       </div>

//       <div className="row">
//         <div className="col">
//           <div className="row">Activity</div>
//           <div className="row">2</div>
//         </div>
//         <div className="col">
//           <div className="row">Sub Activity</div>
//           <div className="row">2</div>
//         </div>
//         <div className="col">
//           <div className="row">Comoponent</div>
//           <div className="row">2</div>
//         </div>
//         <div className="col">
//           <div className="row">Date</div>
//           <div className="row">2</div>
//         </div>
//       </div>
//       <div type="button" class="text-center mx-5 bg-primary text-white">
//         Activity
//       </div>
//     </div>
//   </div>
// );
