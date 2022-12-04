import Carousel from 'react-bootstrap/Carousel';
import car1 from "./pics/car1.1.jpg";
import car2 from "./pics/car2.1.jpg"


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
          <div><h3>First slide label</h3></div>
          <div><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption className='caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;