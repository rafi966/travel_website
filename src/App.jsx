import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Routers from "./router/Routers";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </Router>
  );
}

export default App;


