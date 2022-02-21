import React from 'react'
import { Carousel } from 'react-bootstrap'


export default function CarouselSlide() {
  return (
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="images/singe.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="images/laketanganyika.png"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100"
      src="images/bateau.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
  )
}
