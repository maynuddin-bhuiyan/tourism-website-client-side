import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


import './Tourist.css';



const Tourist = (props) => {
  const { name, price, img, _id, degeneration } = props.touris;

  const history = useHistory();







  const handleAddedItam = (id) => {
    const uri = `/Manage/${_id}`;
    history.push(uri);
  }








  return (
    <>
      <Card style={{ width: '400px' }}>
        <Card.Img variant="top" src={img} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>
            {degeneration}
          </Card.Text>
          <h2>{price}<span>$</span></h2>
          <Button
            onClick={
              () => {

                handleAddedItam(_id);


              }}


            variant="primary">Booking Now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Tourist;