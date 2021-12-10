import React from "react";
import { Table } from "reactstrap";
import EmailForm from "./Emailform";

function CardTable() {
  return (
    <div className="container fluid h-100 p-0">
      <div className="card mb-0 mt-5">
        <div class="row no-gutters">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              className="img-fluid"
              alt="Outdoors at Bangkok Hill"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body maincard p-4">
              <Table
                className="table-responsive text-nowrap"
                id="homepagetable"
              >
                <thead>
                  <tr>
                    <th
                      colspan="2"
                      className="text-center"
                      id="hours"
                      scope="rowgroup"
                    >
                      HOURS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" className="text-center" scope="row">
                      LUNCH
                    </th>
                  </tr>
                  <tr>
                    <td>Tues to Fri</td>
                    <td>11:30am-3:00pm</td>
                  </tr>
                  <tr>
                    <th colspan="2" className="text-center" scope="rowgroup">
                      DINNER
                    </th>
                  </tr>
                  <tr>
                    <td>Tues to Fri</td>
                    <td>4:30pm-10:30pm</td>
                  </tr>
                  <tr>
                    <td>Sat</td>
                    <td>11:30am-9:30pm</td>
                  </tr>
                  <tr>
                    <td>Sun</td>
                    <td>11:30am-9:30pm</td>
                  </tr>
                  <tr>
                    <td>Mon</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <EmailForm />
    </div>
  );
}

export default CardTable;
