import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./main";
import Footer from "./Footer";

// The App component should return all your components
function App() {
  return (
   <>
   <Header/>
   <div style={{display: "flex", alignItems: "flex-start"}}>
    <Aside/><Main/>
   </div>
   <Footer/>
   </>
      
  );
}

// Now, render App inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
