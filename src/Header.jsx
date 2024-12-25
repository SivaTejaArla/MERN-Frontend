import React from "react";
import ButtonDesign from "./components/Button";
export default function Header() {
  const styles = {
    container: {
      display: 'flex', // Use Flexbox for the container
      justifyContent: 'space-between', // Distribute space between items
      maxWidth: '100vw',
      
      padding : '5vh',
    },
    leftContainer: {
      display: 'flex', // Use Flexbox for the left side container
      alignItems: 'flex-start', // Align items to the left
    },
    rightItem: {
      marginLeft: 'auto', // Push the right item to the far right
    backgroundColor: 'lightgreen',
    padding: '10px',
    borderRadius: '5px',
    },
  }

  return (
    <React.StrictMode>
      <div className="rounded-box" style={styles.container}>

        <div style = {styles.leftContainer}>
        <ButtonDesign name="Home" />
        <ButtonDesign name="Contact Us" />
        <ButtonDesign name="Orders" />

        </div>
 

        <ButtonDesign name ="Login" style = {styles.rightItem}></ButtonDesign>
    
      </div>
   
    </React.StrictMode>
  );
}
