import React from "react";
import s from "./../Customers.module.css";

export const Customer = ({name, company, number, email, country, status}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>{number}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>
        <div className={status === "Active" ? s.active : s.inactive}>
          {status}
        </div>
      </td>
    </tr>
  );
};
