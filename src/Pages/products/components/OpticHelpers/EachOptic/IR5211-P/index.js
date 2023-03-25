import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Cover from '../../cover.jpg';
import ServInfo from './IR5211-P';

function IR5211PMain() {
  return (
    <div>
      <title>IR5211-P | PaladiumTechServiceLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={Cover} alt="Cover slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">IR5211-P</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ServInfo />
    </div>
  );
}

export default IR5211PMain;