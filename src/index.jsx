import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./main";
import Footer from "./Footer";

// The App component should return all your components
export default function App() {
  return (
    <div>
      <header id="header">
        <Header />
      </header>
      <div style={{ display: "flex", maxWidth: "100vw" }}>
        <aside id="aside">
          <Aside />
        </aside>
        <main id="main">
          <Main />
        </main>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

// Now, render App inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
