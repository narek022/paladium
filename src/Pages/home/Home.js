import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../../Components/carousel1/Carousel";
import CarouselServices from "../../Components/carousel2/CarouselServices";
import CarouselProducts from "../../Components/carousel3/CarouselProducts";
import Script from "../../Components/readinfo/Script"
function Home() {
  return <div className="Home">
    <div>
      <Carousel />
      <CarouselServices />
      <CarouselProducts />
      <Script />
    </div>
  </div>;
}

export default Home;
