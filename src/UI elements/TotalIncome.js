import React from "react";

export default function TotalIncome(props) {
  return (
    <div className="cardelementclass">
      <span>Total Income</span>
      <h2>₹{props.total_income}</h2>
    </div>
  );
}
