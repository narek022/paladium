import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../Components/carousel1/pics/car2.jpg"
import MineDetectorToolbar from '../../Pages/products/components/AccessoriesHelpers/MineDetectorToolbar';

function Service1() {
  return (
    <div>
      <title>Accessories | PaladiumTechServiceLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">Accessories</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <MineDetectorToolbar />
    </div>
  );
}

export default Service1;