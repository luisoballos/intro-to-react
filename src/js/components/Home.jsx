import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Jumbotron />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;