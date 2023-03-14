import React from "react";

export default function AvailableBalance(props) {
  return (
    <div className="cardelementclass">
      <span>Available Balance</span>
      <h2>₹{props.availablebalance}</h2>
    </div>
  );
}
