import Carousel from "react-bootstrap/Carousel";
import "./CarouselHome.css";
import slides from "../../../data/carouselSlides.json";
import { useNavigate } from "react-router-dom";

function CarouselHome() {
  const navigate = useNavigate();
  const Content = slides.map((slide, index) => (
    <Carousel.Item key={index}>
      <img className="carousel-img" src={slide.img} alt={`slide-${index}`} />

      <Carousel.Caption className="carousel-caption d-flex flex-column align-items-start gap-3">
        <p>{slide.desc}</p>
        <h3>{slide.title}</h3>
        <button className="carousel-btn mb-5 mx-auto" onClick={() => navigate('/shop-left-sidebar')}>Shop Styles</button>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <Carousel
      fade
      className="hero-carousel w-100"
      controls={false}
      interval={3500}
    >
      {Content}
    </Carousel>
  );
}

export default CarouselHome;

