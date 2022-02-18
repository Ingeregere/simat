import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './styleRechercher.css'

export default function Rechercher() {
  return (
    <div>
         <Form className={'bgcard'}>
                <h4>Rechercher</h4>
                <Container>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> Nom de l'Hotel :</Form.Label>
                    <Form.Control type="text" placeholder="Bujumbura" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Du :</Form.Label>
                    <Form.Control type="date" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Au :</Form.Label>
                    <Form.Control type="date" placeholder="name@example.com" />
                </Form.Group>
                <Row>
                    <h6>Séjour de 1 nuit</h6>
                    <Col md={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Adulte</Form.Label>
                    <Form.Control type="number" placeholder="2 Adul." />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enfant</Form.Label>
                    <Form.Control type="number" placeholder="2 enf." />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Chambres</Form.Label>
                        <Form.Control type="number" placeholder="2 chamb." />
                        </Form.Group>

                    </Col>
                   
                </Row>
                    
                    <Button variant="danger" size="sm" className={'mb-2 mt-2'}>
                       Rechercher
                    </Button>
                </Container>
                
            </Form>
    </div>
  )
}
