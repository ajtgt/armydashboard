// import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
// import FamilyHistory from "../../components/healthprofiles/FamilyHistory";
// import FamilyInfo from "../../components/healthprofiles/FamilyInfo";
// import GeneralInfo from "../../components/healthprofiles/GeneralInfo";
// import Investigation from "../../components/healthprofiles/Investigation";
// import PhysicalExamination from "../../components/healthprofiles/PhysicalExamination";

const HealthProfiles = () => {
  const [user, setUser] = useState([]);

  const token = localStorage.getItem("token");

  const url = "http://sams-ttipl.ddns.net/api/healthprofiles";

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
        setUser(response?.data?.data);
        // console.log("got the data");
        // console.log(response.data.data.healthprofiles.familyinfo[0]?.id);
        // setUser(response.data);
        // console.log(response.data.data.healthprofiles.familyinfo[0].id);
        // console.log(user?.healthprofiles?.familyhistory);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tickIcon = (
    <img
      style={{ width: "25px", height: "25px", position: "absolute" }}
      src="http://sams-ttipl.ddns.net/images/tick.png"
    />
  );
  const wrongIcon = (
    <img
      style={{ width: "25px", height: "25px", position: "absolute" }}
      src="http://sams-ttipl.ddns.net/images/wrong.png"
    />
  );

  // const Img = ({ success }) => {
  // <img
  //   style={{ width: "25px", height: "25px", position: "absolute" }}
  //   src={success === 1 ? tickIcon : wrongIcon}
  // />;
  // };

  return (
    <div class="container mt-5 bg-light rounded-3 ">
      <div class="container-fluid">
        <h2>Health Profiles</h2>
        <div class="m-4">
          <ul class="nav nav-pills nav-justified" id="myTab">
            <li class="nav-item">
              <a href="#home" class="nav-link active" data-bs-toggle="pill">
                Family Info
              </a>
            </li>
            <li class="nav-item">
              <a href="#menu1" class="nav-link" data-bs-toggle="pill">
                General Info
              </a>
            </li>
            <li class="nav-item">
              <a href="#menu2" class="nav-link" data-bs-toggle="pill">
                Family History
              </a>
            </li>
            <li class="nav-item">
              <a href="#menu3" class="nav-link" data-bs-toggle="pill">
                Physical Examination
              </a>
            </li>
            <li class="nav-item">
              <a href="#menu4" class="nav-link" data-bs-toggle="pill">
                Investigation
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="home">
              <div class="container mt-3">
                <div class="row">
                  <h4 class="mt-2">Dependents</h4>
                </div>
                <table class="table table-striped table-light table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Relationship</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.healthprofiles?.familyinfo?.length > 0 &&
                      user.healthprofiles?.familyinfo?.map((item) => {
                        // console.log(item);
                        return (
                          <tr>
                            <td>{item?.DependentName}</td>
                            <td>{item?.DependentAge}</td>
                            <td>{item?.DependentGender}</td>
                            <td>{item?.DependentRelationship}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="menu1">
              <div class="row">
                <div class="col">
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          Name of the
                          <br /> Probationer:
                        </td>
                        <td>Use another API</td>
                      </tr>
                      <tr>
                        <td>Height(cms) :</td>
                        <td>{user?.healthprofiles?.generalinfo?.Height}</td>
                      </tr>
                      <tr>
                        <td>Weight( kgs ) :</td>
                        <td>{user?.healthprofiles?.generalinfo?.Weight}</td>
                      </tr>
                      <tr>
                        <td>Past History :</td>
                        <td>
                          {user?.healthprofiles?.generalinfo?.PastHistory}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="row">
                    <strong>Chest Reading</strong>
                  </div>
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>Expi(cms) :</td>
                        <td>{user?.healthprofiles?.generalinfo?.Expi}</td>
                      </tr>
                      <tr>
                        <td>Ins(cms) :</td>
                        <td>{user?.healthprofiles?.generalinfo?.Ins}</td>
                      </tr>
                      <tr>
                        <td>Expansion(cms):</td>
                        <td>{user?.healthprofiles?.generalinfo?.Expansion}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="menu2">
              <div class="row">
                <div class="col">
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>Diebaties:</td>
                        <td>
                          {/* {Img(
                            parseInt(
                              user?.healthprofiles?.familyhistory?.Diabetes
                            )
                          )} */}
                          {user?.healthprofiles?.familyhistory?.Diabetes === 1
                            ? tickIcon
                            : wrongIcon}
                        </td>
                      </tr>
                      <tr>
                        <td>Heart Diseases :</td>
                        <td>
                          {/* {Img(
                            user?.healthprofiles?.familyhistory?.HeartDiseases
                          )} */}
                          {/* {user?.healthprofiles?.familyhistory?.HeartDiseases} */}
                          {user?.healthprofiles?.familyhistory
                            ?.HeartDiseases === 1
                            ? tickIcon
                            : wrongIcon}
                        </td>
                      </tr>
                      <tr>
                        <td>Migrane :</td>
                        <td>
                          {/* {Img(user?.healthprofiles?.familyhistory?.Migrane)} */}
                          {/* {user?.healthprofiles?.familyhistory?.Migrane} */}
                          {user?.healthprofiles?.familyhistory?.Migrane === 1
                            ? tickIcon
                            : wrongIcon}
                        </td>
                      </tr>
                      <tr>
                        <td>Epilepsy :</td>
                        <td>
                          {/* {Img(user?.healthprofiles?.familyhistory?.Epilepsy)} */}
                          {/* {user?.healthprofiles?.familyhistory?.Epilepsy} */}
                          {user?.healthprofiles?.familyhistory?.Epilepsy === 1
                            ? tickIcon
                            : wrongIcon}
                        </td>
                      </tr>
                      <tr>
                        <td>Allergy :</td>
                        <td>
                          {/* {Img(user?.healthprofiles?.familyhistory?.Allergy)} */}
                          {/* {user?.healthprofiles?.familyhistory?.Allergy} */}
                          {user?.healthprofiles?.familyhistory?.Allergy === 1
                            ? tickIcon
                            : wrongIcon}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="row">
                    <strong>Personal History</strong>
                  </div>
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>Smoking :</td>
                        <td>
                          {user?.healthprofiles?.familyhistory?.Smoking === 1
                            ? tickIcon
                            : wrongIcon}
                          {/* {user?.healthprofiles?.familyhistory?.Smoking} */}
                        </td>
                      </tr>
                      <tr>
                        <td>Alcohol :</td>
                        <td>
                          {user?.healthprofiles?.familyhistory?.Alchohol === 1
                            ? tickIcon
                            : wrongIcon}
                          {/* {user?.healthprofiles?.familyhistory?.Alchohol} */}
                        </td>
                      </tr>
                      <tr>
                        <td>Veg :</td>
                        <td>
                          {user?.healthprofiles?.familyhistory?.Veg === 1
                            ? tickIcon
                            : wrongIcon}
                          {/* {user?.healthprofiles?.familyhistory?.Veg} */}
                        </td>
                      </tr>
                      <tr>
                        <td>Non-Veg :</td>
                        <td>
                          {user?.healthprofiles?.familyhistory?.NonVeg === 1
                            ? tickIcon
                            : wrongIcon}
                          {/* {user?.healthprofiles?.familyhistory?.NonVeg} */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="menu3">
              <div class="row">
                <div class="col">
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>Blood Pressure :</td>
                        <td>
                          {
                            user?.healthprofiles?.physicalexamination
                              ?.Bloodpressure
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Pulse :</td>
                        <td>
                          {user?.healthprofiles?.physicalexamination?.Pulse}
                        </td>
                      </tr>
                      <tr>
                        <td>ENT :</td>
                        <td>
                          {user?.healthprofiles?.physicalexamination?.Ent}
                        </td>
                      </tr>
                      <tr>
                        <td>Dental Examination :</td>
                        <td>
                          {user?.healthprofiles?.physicalexamination?.Ent}
                        </td>
                      </tr>
                      <tr>
                        <td>Heart :</td>
                        <td>
                          {user?.healthprofiles?.physicalexamination?.Heart}
                        </td>
                      </tr>
                      <tr>
                        <td>Lungs :</td>
                        <td>
                          {user?.healthprofiles?.physicalexamination?.Lungs}
                        </td>
                      </tr>
                      <tr>
                        <td>Abdomen :</td>
                        <td>
                          {user?.healthprofiles?.physicalexamination?.Abdomen}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="row">
                    <h7>
                      <strong>Eye Sight</strong>
                    </h7>

                    <table class="table  table-light table-borderless">
                      <tbody>
                        <tr>
                          <td>Expi(cms) :</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>Ins(cms) :</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>Expansion(cms):</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="row">
                    <table class="table  table-light table-borderless">
                      <tbody>
                        <tr>
                          <td>Urological System :</td>
                          <td>
                            {
                              user?.healthprofiles?.physicalexamination
                                ?.Urological
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>Athlete/Non Athlete :</td>
                          <td>
                            {
                              user?.healthprofiles?.physicalexamination
                                ?.Athelete
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>Any Defect or Deformity :</td>
                          <td>
                            {
                              user?.healthprofiles?.physicalexamination
                                ?.Defectordeformity
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>Any scars of operation :</td>
                          <td>
                            {
                              user?.healthprofiles?.physicalexamination
                                ?.Scarsoperation
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="menu4">
              <div class="row">
                <div class="col">
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>Urine Examination:</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Blood Group:</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>RH Factor :</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Xray Chest PA view :</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col">
                  <div class="row">
                    <strong>Immunization</strong>
                  </div>
                  <table class="table  table-light table-borderless">
                    <tbody>
                      <tr>
                        <td>Tetanus Oxide:</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthProfiles;
