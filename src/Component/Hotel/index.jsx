import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardHorizontal from '../CardHorizontal'
import Rechercher from './Rechercher'
import './styleHotel.css'

export default function Hotel() {
  return (
    <Container className={'tophotel mb-2'}>
        <Row className={'mb-2'}>
            <Col md= {3}  className={' mb-5'} fixed={'top'}>
                 <Rechercher />
            </Col>

            <Col md= {9}>
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />
                <CardHorizontal />

            </Col>

        </Row>

    </Container>
  )
}
