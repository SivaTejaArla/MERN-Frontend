import React from "react";
import CardComponent from "./components/CardComponent";
export default function Main() {
  const styles = {
    container: {
      display: "flex",

      justifyContent: "space-between",
      flexWrap: "wrap",
      overflowY: "auto",
      gap: "20px",
      maxHeight: "100vh", // Set a fixed height or max-height
      padding: "10px",
     
    },

    item: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
    },
  };

  return (
    <React.StrictMode>
      <div style={styles.container}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent/>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />

        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </React.StrictMode>
  );
}
