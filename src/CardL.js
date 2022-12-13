
import Card from 'react-bootstrap/Card';
import React from 'react';

function CardL({ el }) {
    return (
      <Card  style={{ width: '18rem' , position: 'relative', left: '40%'} }>
        <Card.Img  src="https://qph.cf2.quoracdn.net/main-qimg-360d136b5131cc0a6c40c2954f7c98e9-lq" />
        <Card.Body style={{backgroundColor: "lightblue"}}>
          <Card.Title>{el.FullName}</Card.Title>
          <Card.Text>
           {el.Bio}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default CardL;
 