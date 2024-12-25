import React from "react";
export default function Aside() {
  return (
    <React.StrictMode>
    <div className="rounded-box" style={{maxWidth: '30vw', height: '70vh', border: '2px solid black',  backgroundColor: 'lightblue', borderRadius : '10px' , padding : '15px' , margin : '15px' }}>
    This box has rounded corners!
  </div>
    </React.StrictMode>
  );
}
