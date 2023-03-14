import React from "react";

export default function Expenses(props) {
  return (
    <div className="cardelementclass">
      <span>Total Expense</span>
      <h2>₹{props.expense}</h2>
    </div>
  );
}
