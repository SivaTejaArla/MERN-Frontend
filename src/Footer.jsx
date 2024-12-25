import React from "react";
export default function Footer() {
  return (
    <React.StrictMode>
      <div
        className="rounded-box"
        style={{
          maxWidth: "100vw",
          height: "100px",
          border: "2px solid black",
          backgroundColor: "lightblue",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        This box has rounded corners!
      </div>
    </React.StrictMode>
  );
}
