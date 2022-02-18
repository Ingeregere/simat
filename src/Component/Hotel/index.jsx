import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rechercher from './Rechercher'
import ImageHotel1 from "../Hotel/images/hotel1.jpg"
import ImageHotel2 from "../Hotel/images/hotel2.jpg"
import ImageHotel3 from "../Hotel/images/hotel3.jpg"
import ImageHotel4 from "../Hotel/images/hotel4.jpg"
import ImageHotel5 from "../Hotel/images/hotel5.jpg"
import ImageHotel6 from "../Hotel/images/hotel6.jpg"

import './styleHotel.css'
import CardHorizontalHotel from '../CardHorizontal'

export default function Hotel() {
  return (
    <Container className={'tophotel mb-2'}>
        <Row className={'mb-2'}>
            <Col md= {3}  className={' mb-5'} fixed={'top'}>
                 <Rechercher />
            </Col>

            <Col md= {9}>
                <CardHorizontalHotel ImageHotels={ImageHotel1}  />
                <CardHorizontalHotel ImageHotels={ImageHotel2}  />
                <CardHorizontalHotel ImageHotels={ImageHotel1}  />
                <CardHorizontalHotel ImageHotels={ImageHotel4}  />
                <CardHorizontalHotel ImageHotels={ImageHotel5}  />
                <CardHorizontalHotel ImageHotels={ImageHotel2}  />

            </Col>

        </Row>

    </Container>
  )
}
