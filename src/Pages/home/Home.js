import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../../Components/carousel1/Carousel";
import CardList1 from "../../Components/cardList1/CardList"
import CardList2 from "../../Components/cardList2/CardList"
import "./style.css"
import { NavLink } from "react-bootstrap";
function Home() {
  return <div className="Home">
    <title>Home | PaladiumTechServiceLimited</title>
    <div>
      <Carousel />
      <div className="text"><NavLink>Our Services</NavLink></div>
      <CardList1 />
      <CardList1 />
      <div className="text"><NavLink>Our Products</NavLink></div>
      <CardList2 />
    </div>
  </div>;
}

export default Home;
