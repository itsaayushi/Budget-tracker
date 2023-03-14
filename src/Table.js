import React from "react";

export default function Table() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <h2>Overall</h2>
      <div
        style={{
          display: "grid",
          gap: "50px",
          fontSize: "20px",
          gridTemplateColumns: "8fr 2fr 2fr 2fr",
          alignItems: "center",
          maxWidth: "2000px",
          padding: "10px",
          backgroundColor: "grey",
          borderRadius: "5px",
        }}
      >
        <span>Title</span>
        <span>Date</span>
        <span>Price</span>
        <span>Status</span>
      </div>
    </div>
  );
}
