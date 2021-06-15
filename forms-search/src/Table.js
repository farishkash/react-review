import React from "react";
import TableRow from "./TableRow";

export default function Table({ people }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {/* TableRow needs data */}
        {people.map((person) => (
          <TableRow fullName={person.name} />
        ))}
      </tbody>
    </table>
  );
}
