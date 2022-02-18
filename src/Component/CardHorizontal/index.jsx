import React from 'react';
import { Button, Card,  Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ShowImage from './showImage';

function CardProductByCategory({product}) {

        return (
            <div className={'mt-3'}>
            <Card >
                <Row>
                    <Col md={6} >
                         <ShowImage />
                    </Col>
                    <Col md={6} >
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                                Situé à Bujumbura, à 5 km du musée Vivant, 
                                l'Hotel Kangaroo Bujumbura propose un restaurant, 
                                un parking privé gratuit,
                                un bar et un jardin. Il propose des chambres familiales et une terrasse.
                        </Card.Text>
                        <Button variant="primary" className={'mb-3'}>Voir les tarifs</Button>
                    </Card.Body>
                    </Col>
                </Row>
            
            </Card>
            </div>
        );
}

export default CardProductByCategory;