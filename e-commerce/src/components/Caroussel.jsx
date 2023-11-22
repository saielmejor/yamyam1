import Carousel from 'react-bootstrap/Carousel';


export default function Caroussel() {
  return (
    <div className='my_carousel_main'>
    <Carousel>
    <Carousel.Item>
      <img className="photo" src="/images/ricebowl.png" alt="rice" />
      <Carousel.Caption>
        <h3> Your bowl of choice</h3>
        <p>Hand-crafted and Delicious</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className="photo" src="/images/arepa.jpg" alt="arepas" />
      <Carousel.Caption>
        <h3> Choose your Filling</h3>
        <p>Bite into a Delicious Experience</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className='photo' src="/images/rice.jpg" alt="empanadas" />
      <Carousel.Caption>
        <h3>Let's Have Empanadas</h3>
        <p>
          Empanas for every appetite
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
);
}

