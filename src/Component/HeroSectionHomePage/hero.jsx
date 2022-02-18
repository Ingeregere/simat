import React from 'react'
import { Button,Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                        <Link to='/'>
                            <Button className={'mt-2 mb-2 btn-danger'}>
                              {buttonLabel}
                            </Button>
                      </Link>
                   
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
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img2}
                        alt={alt}
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img3}
                        alt={alt}
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
        </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
