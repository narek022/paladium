import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import {NavLink} from "react-bootstrap"
import img from "./pics/auto-pal2.jpg";

function IndividualIntervalsExample() {
  return (
    <div className="car">
      <h2>OUR SERVICES</h2>
      <div className="car1">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="nav" href="/service1">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="nav" href="/service2">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="nav" href="/service3">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
            <NavLink className="nav" href="/service4">Our Service</NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default IndividualIntervalsExample;
