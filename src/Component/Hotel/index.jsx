import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rechercher from './Rechercher'
import ImageHotel1 from "../Hotel/images/hotel1.jpg"
import ImageHotel2 from "../Hotel/images/hotel2.jpg"
import ImageHotel4 from "../Hotel/images/hotel4.jpg"
import ImageHotel5 from "../Hotel/images/hotel5.jpg"

import './styleHotel.css'
import CardHorizontalHotel from '../CardHorizontal'
import Filtre from './Filter'

export default function Hotel() {
  return (
    <Container className={'tophotel mb-2'}>
        <Row className={'mb-2'}>
            <Col md= {3}  className={' mb-5'} fixed={'top'}>
                 <Rechercher />
                 <Filtre />
            </Col>
            <Col md= {9}>
                 <h5>Voici tous les hotels du Burundi</h5>
                <CardHorizontalHotel ImageHotels={ImageHotel1} NameHotel={"Hotel Novotel"}  />
                <CardHorizontalHotel ImageHotels={ImageHotel2} NameHotel={"Hotel Club du lac tanganyika"}  />
                <CardHorizontalHotel ImageHotels={ImageHotel1} NameHotel={"Hotel king"}  />
                <CardHorizontalHotel ImageHotels={ImageHotel4} NameHotel={"Hotel Blaise"}  />
                <CardHorizontalHotel ImageHotels={ImageHotel5} NameHotel={"Hotel Maria luxe "} />
                <CardHorizontalHotel ImageHotels={ImageHotel2} NameHotel={"Hotel Panoramique"}  />
            </Col>
        </Row>
    </Container>
  )
}
