import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeAutcntion from '../../../Firebase/firebase.init';
import { useState } from 'react';
import './Tourist.css';

initializeAutcntion();

const googleProvider = new GoogleAuthProvider();


const Tourist = (props) => {
  const { name, Price, img, _id, degeneration } = props.touris;

  const history = useHistory();
  const auth = getAuth();
  const [setuser] = useState({});


  const historyData = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/Home";


  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setuser(result.user);
        historyData.push(url)

      }).catch((err) => console.log(err))

  }




  const handleAddedItam = (id) => {
    const uri = `/Manage/${_id}`;
    history.push(uri);
  }








  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>
            {degeneration}
          </Card.Text>
          <h2>{Price}<span>$</span></h2>
          <Button
            onClick={
              () => {
                handleGoogleSignIn();
                handleAddedItam(_id);


              }}


            variant="primary">Booking Now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Tourist;