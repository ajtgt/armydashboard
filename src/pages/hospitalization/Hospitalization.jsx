import React, { useEffect, useState } from "react";
import { Card, Container, Tab, Tabs, Button } from "react-bootstrap";
import axios from "axios";

const Hospitalization = () => {
  const [userP, setUserP] = useState([]);
  const [userR, setUserR] = useState([]);
  const [userS, setUserS] = useState([]);
  const [userM, setUserM] = useState([]);

  const token = localStorage.getItem("token");

  const urlp = "http://sams-ttipl.ddns.net/api/prescriptions";
  // const urld = "";
  const urlr = "http://sams-ttipl.ddns.net/api/labreports";
  const urls = "http://sams-ttipl.ddns.net/api/viewsickreports";
  const urlm = "http://sams-ttipl.ddns.net/api/medicalexamination";

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

  const fetchPData = () => {
    axios
      .post(urlp, body, config)
      .then((response) => {
        setUserP(response.data.data[0].date);
        // alert("Yo got the data");
        // console.log(userP.date);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  const fetchRData = () => {
    axios
      .post(urlr, body, config)
      .then((response) => {
        setUserR(response.data.data[0]);
        // alert("Yo got the data");
        // console.log(response.data);
        // console.log(userR.daterecord[0]);
        // console.log(userR?.daterecord?.[0].ReportName);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  const fetchSData = () => {
    axios
      .post(urls, body, config)
      .then((response) => {
        setUserS(response.data.data[0]);
        // alert("Yo got the data");
        // console.log(userS.sickreport);
        // console.log(userR.daterecord[0]);
        // console.log(userR?.daterecord?.[0].ReportName);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  const fetchMData = () => {
    axios
      .post(urlm, body, config)
      .then((response) => {
        setUserM(response.data.data[0]);
        alert("Yo got the data");
        // console.log(response.data.data[0]);
        // console.log(userM, response.data.data[0]);
        // console.log(userR?.daterecord?.[0].ReportName);
      })
      .catch((error) => {
        alert("error", error.response);
      });
  };

  useEffect(() => {
    fetchPData();
    fetchRData();
    fetchSData();
    fetchMData();
  }, []);

  return (
    <div className="conatiner ">
      <Container className="p-5">
        <Card>
          <Card.Header>
            <Card.Title>Hospitalization</Card.Title>
          </Card.Header>
          <Card.Body>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-2"
            >
              <Tab eventKey="prescriptions" title="Prescriptions">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">DATE</th>
                      <th scope="col">DOCTOR NAME</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody id="prescriptions_data">
                    <tr>
                      <td>{userP}</td>
                      <td>API NA</td>
                    </tr>
                  </tbody>
                </table>
              </Tab>

              <Tab eventKey="dischargesummary" title="Discharge Summary">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">DOCTOR NAME</th>
                      <th scope="col">Admitted Date</th>
                      <th scope="col">Discharge Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>API NA</td>
                    </tr>
                  </tbody>
                </table>
              </Tab>

              <Tab eventKey="reports" title="Reports">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">DATE</th>
                      <th scope="col">TEST NAME</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{userR.date}</td>
                      <td>{userR?.daterecord?.[0].ReportName}</td>
                      <td>Download</td>
                    </tr>
                  </tbody>
                </table>
              </Tab>
              <Tab eventKey="sickinjuryreport" title="Sick/Injury Report">
                <div class="container mt-3">
                  <h6>Date</h6>
                  <div
                    type="button"
                    class="btn-primary"
                    data-bs-toggle="collapse"
                    data-bs-target="#demo"
                  >
                    {userR.date}
                  </div>
                  <div id="demo" class="collapse">
                    {userS.sickreport}
                  </div>
                </div>
              </Tab>

              <Tab eventKey="medicalexamination" title="Medical Examination">
                <div className="row p-5">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <table class="table table-borderless">
                          <tbody>
                            <tr>
                              <td>Tempearture</td>
                              <td>: {userM.temperature}</td>
                            </tr>
                            <tr>
                              <td>Antigen Test</td>
                              <td>: {userM.antigentest}</td>
                            </tr>
                            <tr>
                              <td>RTPCR</td>
                              <td>: {userM.rtpcr}</td>
                            </tr>
                            <tr>
                              <td>Hemoglobin</td>
                              <td>: {userM.haemoglobin}</td>
                            </tr>
                            <tr>
                              <td>Calcium</td>
                              <td>: {userM.calcium}</td>
                            </tr>
                            <tr>
                              <td>Vitamin D</td>
                              <td>: {userM.vitamind}</td>
                            </tr>
                            <tr>
                              <td>Vitamin B12</td>
                              <td>: {userM.vitaminb12}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col">
                        <table class="table table-borderless">
                          <tbody>
                            <tr>
                              <th>Pre-Existing Injury</th>
                              <td>{userM.preexistinginjury}</td>
                            </tr>
                            <tr>
                              <th>Family Member Ever Tested Covid +ve</th>
                              <td>NA</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Hospitalization;
