import React from "react";

export default function TableRow({ firstName, lastName, email }) {
  return (
    <>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
      </tr>
    </>
  );
}
