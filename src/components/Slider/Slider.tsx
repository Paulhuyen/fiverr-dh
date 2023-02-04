import Carousel from "react-bootstrap/Carousel";

type Props = {};

function Slider({}: Props) {
  return (
    <Carousel slide={false} controls={false} indicators={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 object-fit"
          src="./img/1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 object-fit"
          src="./img/2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 object-fit"
          src="./img/3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 object-fit"
          src="./img/4.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 object-fit"
          src="./img/5.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
