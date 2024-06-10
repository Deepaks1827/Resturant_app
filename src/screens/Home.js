import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousall from "../components/Carousall";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousall />
      </div>
      
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
     

      <div>
        <Footer />
      </div>
    </div>
  );
}
