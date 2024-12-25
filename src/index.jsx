import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./main";
import Footer from "./Footer";
const header = ReactDOM.createRoot(document.getElementById("header"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));
const main = ReactDOM.createRoot(document.getElementById("main"));
const aside = ReactDOM.createRoot(document.getElementById("aside"));

// Render the App component inside the root element
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
aside.render(
  <React.StrictMode>
    <Aside />
  </React.StrictMode>
);
main.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
