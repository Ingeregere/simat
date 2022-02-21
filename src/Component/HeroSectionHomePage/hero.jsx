import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './styleHero.css';


export default function HeroSections({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img1,
    img2,
    img3,
    alt,
    imgStart
}) {
  return (
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <Container >
            <Row style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}>
                <Col md={6}>
                
              <div className=''>
                <div className='top-line'>{topLine}</div>
                    <h1 className={lightText ? 'heading' : 'heading dark'}>
                      {headline}
                    </h1>
                    <p
                      className={
                        lightTextDesc
                          ? 'home__hero-subtitle'
                          : 'home__hero-subtitle dark'
                      }
                    >
                      {description}
                    </p>
                   
              </div>
                </Col>
                <Col md={6}>
                    
                    <Carousel fade>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img1}
                        alt={alt}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img2}
                        alt={alt}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img3}
                        alt={alt}
                      />
                    </Carousel.Item>
        </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
