import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Reservation from "./component/Reservation";
import Order from "./component/Order";
import Login from "./component/Login";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
