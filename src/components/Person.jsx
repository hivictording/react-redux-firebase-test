import React from "react";

function Person() {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
        <button className="btn btn-secondary mr-5">Edit</button>
        <button className="btn btn-warning">Remove</button>
      </td>
    </tr>
  );
}

export default Person;
