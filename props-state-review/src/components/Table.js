import React from "react";
import TableRow from "./TableRow";

export default function Table({ users }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0
          ? "No Data Yet"
          : users.map((user) => (
              <TableRow
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
                key={user.login.uuid}
              />
            ))}
      </tbody>
    </table>
  );
}
