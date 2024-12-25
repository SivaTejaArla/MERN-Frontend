import React from "react";
import ButtonDesign from "./components/Button";
export default function Aside() {
  const styles = {
    container: {
      display: "flex", // Use Flexbox for the container
      justifyContent: "space-between", // Distribute space between items
      maxWidth: "90vw",
      padding: "5vh",
      flexDirection: "column",
      gap: "20px",
    },
  };
  return (
    <React.StrictMode>
      <div style={styles.container}>
        <ButtonDesign name="Item" />

        <ButtonDesign name="Item" />

        <ButtonDesign name="Item" />

        <ButtonDesign name="Item" />
        <ButtonDesign name="Item" />

        <ButtonDesign name="Item" />
      </div>
    </React.StrictMode>
  );
}
