import React from "react";

export default function TableRow({ fullName }) {
  return (
    <div>
      <tr>
        <td>{fullName}</td>
      </tr>
    </div>
  );
}
