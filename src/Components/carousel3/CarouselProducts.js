import Carousel from "react-bootstrap/Carousel";
import {NavLink} from "react-bootstrap"
import "./style3.css";
import img from "./pics/auto-spare.jpg";

function IndividualIntervalsExample() {
  return (
    <div className="car">
      <h2>OUR PRODUCTS</h2>
      <div className="car1">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="li" href="/product1">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="li" href="/product2">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="li" href="/product3">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="nav" href="/product4">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default IndividualIntervalsExample;
