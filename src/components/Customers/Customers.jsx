import React, { useEffect, useReducer, useState } from "react";
import s from "./Customers.module.css";
import { Customer } from "./Customer/Customer";
import reducer, { initialState } from "./reducer";
import { getAllCustomers, getCustomer } from "../../server/server";

export const Customers = (props) => {
  const [value, setValue] = useState("");
  const changeValue = (event) => {
    setValue(event.target.value);
  };
  const pressEnter = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "setCustomer", data: getCustomer(value) });
      // setValue("");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const data = getAllCustomers();
    dispatch({ type: "setAllCustomers", data });
  }, [props]);

  return (
    <div className={s.customers}>
      <div className={s.containerHello}>
        <h2>Hello Evano 👋🏼,</h2>
        <div className={s.containerCustomers}>
          <div className={s.head}>
            <div className={s.title}>
              <h3>All Customers</h3>
              <h4>Active Members</h4>
            </div>
              <input
                type="text"
                value={value}
                onChange={changeValue}
                onKeyDown={pressEnter}
                placeholder="Search"
                on
              />
          </div>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {state.customer === null
                ? state.dataCustomers.map((el) => (
                    <Customer
                      key={el.id}
                      name={el.name}
                      company={el.company}
                      number={el.number}
                      email={el.email}
                      country={el.country}
                      status={el.status}
                    />
                  ))
                : state.customer.map((el) => (
                    <Customer
                      key={el.id}
                      name={el.name}
                      company={el.company}
                      number={el.number}
                      email={el.email}
                      country={el.country}
                      status={el.status}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
