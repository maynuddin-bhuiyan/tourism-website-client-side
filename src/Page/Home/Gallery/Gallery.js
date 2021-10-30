import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css';
import images1 from '../../../images/Gallery/gallery1.jpg';
import images2 from '../../../images/Gallery/gallery2.jpg';
import images3 from '../../../images/Gallery/gallery3.webp';
import images4 from '../../../images/Gallery/gallery4.jpg';
import images5 from '../../../images/Gallery/gallery5.jpg';
import images6 from '../../../images/Gallery/gallery6.jpg';



const Gallery = () => {
  return (
    <div className='Gallery'>
      <h1>Gallery</h1>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={images1} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={images2} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={images3} thumbnail />
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Image src={images4} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={images5} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={images6} thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;