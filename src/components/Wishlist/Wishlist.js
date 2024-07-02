// Wishlist.js

import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
    

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/user/getwishlist', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}` 

          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch wishlist');
        }

        const data = await response.json();
        setWishlist(data.wishlist);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <Col key={product._id} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.images[0] ? product.images[0].url : ''} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="info">No items in wishlist</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Wishlist;
