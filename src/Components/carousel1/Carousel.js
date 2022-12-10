import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import car1 from "./pics/car1.1.jpg";
import car2 from "./pics/car2.1.1.jpg";
import { NavLink } from "react-bootstrap";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={car1} alt="First slide" />
        <Carousel.Caption className="caption">
          <div>
            <NavLink href="/works" className="link">Our Works</NavLink>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={car2} alt="Second slide" />
        <Carousel.Caption className="caption">
          <div>
            <NavLink href="/services" className="link">Our Services</NavLink>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={car1} alt="First slide" />
        <Carousel.Caption className="caption">
          <div>
            <NavLink href="/products" className="link">Our Products</NavLink>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
