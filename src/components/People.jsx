import React from "react";
import Person from "./Person";

function People() {
  return (
    <div className="container my-3">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          <Person />
        </tbody>
      </table>
    </div>
  );
}

export default People;
