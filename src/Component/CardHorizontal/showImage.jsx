import React from 'react';
import { Card } from 'react-bootstrap';

function  ShowImage({item, url})  {
        return (
            <Card.Img variant="top" src="images/panoramique.jpg"  width="100%" height={'95%'} />
        );
}

export default ShowImage;