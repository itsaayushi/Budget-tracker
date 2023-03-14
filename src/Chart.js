import React from "react";

export default function Chart() {
  return (
    <div style={{ padding: "50px", height: "200px" }}>
      <div
        style={{
          height: "100%",
          gap: "30px",
          display: "flex",
        }}
      >
        <div className="barBox">
          <span
            style={{
              height: "40%",
              backgroundColor: "white",

              zIndex: 2,
            }}
          ></span>
          <span
            style={{
              height: "20%",

              backgroundColor: "greenyellow",
              zIndex: 8,
            }}
          >
            20
          </span>
          <span
            style={{
              height: "40%",

              backgroundColor: "red",
              zIndex: 12,
            }}
          >
            40
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 30,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            30
          </span>
          <span
            style={{
              height: 40,
              backgroundColor: "red",
            }}
          >
            40
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 40,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: 30,
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 40,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: 30,
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 40,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: 30,
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 20,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: 50,
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 50,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: 20,
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: 40,
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: 30,
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: 30,
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
        <div className="barBox">
          <span
            style={{
              height: "30%",
              backgroundColor: "white",
            }}
          ></span>
          <span
            style={{
              height: "30%",
              backgroundColor: "greenyellow",
            }}
          >
            20
          </span>
          <span
            style={{
              height: "40%",
              backgroundColor: "red",
            }}
          >
            20
          </span>
        </div>
      </div>
    </div>
  );
}
