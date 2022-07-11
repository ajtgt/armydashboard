import React from "react";

const FamilyHistory = () => {
  return (
    <div class="row mx-4 my-5">
      <div class="col-6">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td>
                Name of the
                <br />
                Practioner:
              </td>
              <td>Ajay</td>
            </tr>
            <tr>
              <td>Height(cms):</td>
              <td>5.5 f</td>
            </tr>
            <tr>
              <td>Weight(kgs):</td>
              <td>50kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6 round-3 ">
        <table class="table table-borderless bg-primary ">
          <tbody>
            <tr>
              <td>
                <strong>Chest Reading</strong>
              </td>
            </tr>
            <tr>
              <td>Expi(cms) :</td>
              <td></td>
            </tr>
            <tr>
              <td>Ins(cms) :</td>
              <td></td>
            </tr>
            <tr>
              <td>Expansion(cms):</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FamilyHistory;
