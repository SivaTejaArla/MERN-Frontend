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
  const cardCount = 14; // Example: Render 24 CardComponents
  const cards = new Array(cardCount).fill(null); // Create an array with `cardCount` elements
  return (
    <React.StrictMode>
      <div style={styles.container}>
        {cards.map((_, index) => (
          <CardComponent key={index} />
        ))}
      </div>
    </React.StrictMode>
  );
}
