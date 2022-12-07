import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../../Components/carousel1/Carousel";
import CardList1 from "../../Components/cardList1/CardList"
import CardList2 from "../../Components/cardList2/CardList"
function Home() {
  return <div className="Home">
    <title>Home | PaladiumTechServiceLimited</title>
    <div>
      <Carousel />
      <CardList1 />
      <CardList2/>
    </div>
  </div>;
}

export default Home;
