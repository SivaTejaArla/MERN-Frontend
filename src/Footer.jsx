import React from "react";

import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import wp from "./assets/whatsapp.png";


export default function Footer() {


const styles = {
  container :{

    maxWidth: "100vw",
    maxHeight: "35vh",
    background: '#AAFFFB',
    borderRadius : '20px',
     border : '2px solid white'


  },
  imageContainer : {
    display: 'flex', 
    alignItems : 'center',
    justifyContent: 'center',
    gap : '2vw',
    paddingTop : '2vw'

  },
  detailscontainer : {
    display: 'flex', 
    justifyContent: 'center',
   gap : '20px'
  },
  images : {
    height : '50px',

  }
}

  return (
    <React.StrictMode>
      <div style= {styles.container}>
        <div style={styles.imageContainer}>
          <img src={fb} alt="Faceboook" style={styles.images}/>
          <img src={insta} alt="Instagram" style={styles.images} />
          <img src={wp} alt="Whatsapp" style={styles.images}/>
        </div>
        <div style= {styles.detailscontainer}>
          <h3>Info</h3> 
          <h3>Marketing</h3>
          <h3>Support</h3>
        </div>
        <div style= {styles.detailscontainer}>
          <h3>Terms of Use</h3> 
          <h3>privacy Policy</h3>
        </div>
        <div style= {styles.detailscontainer}>
          <h3>© 2024 Siva Teja Arla</h3> 
        </div>
      </div>
    </React.StrictMode>
  );
}
