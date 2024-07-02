
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/cart/findonecart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}` 

          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart');
        }

        const data = await response.json();
        setCart(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

    const handleRemoveFromCart = async (productId) => {
      console.log(productId)
      try {
      const response = await fetch(`http://localhost:3001/api/cart/removefromcart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 

        },
      });

      if (!response.ok) {
        throw new Error('Failed to remove product from cart');
      }

      const updatedCartResponse = await fetch('http://localhost:3001/api/cart/findonecart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });

    if (!updatedCartResponse.ok) {
      throw new Error('Failed to fetch updated cart');
    }

    const updatedCartData = await updatedCartResponse.json();
    setCart(updatedCartData);
  
    } catch (error) {
      console.error('Error removing from cart:', error);
      // Handle the error (e.g., show a notification to the user)
    }
  };

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

  if (!cart || cart.products.length === 0) {
    return (
      <Container>
        <Alert variant="info">Your cart is empty</Alert>
      </Container>
    );
  }

  const cartTotal = cart.products.reduce((total, product) => total + product.price * product.count, 0);

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Your Cart</h2>
          <p>User: {"cart.user.name"}</p>
          <p>Email: {"cart.user.email"}</p>
        </Col>
      </Row>
      <Row>
        {cart.products.map((product) => (
          <Col key={product._id} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Quantity: {product.count}</Card.Text>
                <Button variant="danger" onClick={() => handleRemoveFromCart(product.prodId)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col>
          <h4>Total: $ {cart.cartTotal.toFixed(2)}</h4>
          <Button variant="primary">Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
