import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../../Components/carousel1/Carousel";
import CardList1 from "../../Components/cardList1/CardList"
import CardList2 from "../../Components/cardList2/CardList"
import "./style.css"
import { Link } from "react-router-dom"

function Home() {
  return <div className="Home">
    <title>Home | PaladiumTechServiceLimited</title>
    <div>
      <Carousel />
      <div className="text"><Link to="/services">Our Service</Link></div>
      <CardList1 />
      <div className="text"><Link to="/products">Our Products</Link></div>
      <CardList2 />
    </div>
  </div>;
}

export default Home;
