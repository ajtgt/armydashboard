import React from "react";

function Investigation() {
  return (
    <div class="row mx-4 my-5">
      <div class="col-6">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td>Urine Examination :</td>
              <td></td>
            </tr>
            <tr>
              <td>Blood Group :</td>
              <td></td>
            </tr>
            <tr>
              <td>RH Factor : </td>
              <td></td>
            </tr>
            <tr>
              <td>Xray Chest PA view :</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6 round-3 ">
        <table class="table table-borderless bg-primary ">
          <tbody>
            <tr>
              <td>
                <strong>Immunization </strong>
              </td>
            </tr>
            <tr>
              <td>Tetanus Oxide</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Investigation;
