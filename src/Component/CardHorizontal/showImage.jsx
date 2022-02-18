import React from 'react';
import { Card } from 'react-bootstrap';
function  ShowImage({ImageHotel})  {
        return (
            <Card.Img variant="top" src={ImageHotel}  width="100%" height={'95%'} />
        );
}

export default ShowImage;