import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Navbar, Nav, Footer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importing custom CSS for additional styles

// List of Products
const products = [
  { id: 1, name: 'iPhone 14 Pro', price: '$999', img: 'https://i.pinimg.com/564x/ac/f3/78/acf3780e27fdc2022aee2c5d6cb5cef9.jpg', description: 'Latest Apple iPhone with A16 chip.' },
  { id: 2, name: 'Samsung Galaxy S23', price: '$899', img: 'https://i.pinimg.com/564x/8c/cd/6f/8ccd6f93cdabe4ad8e437f8799895b83.jpg', description: 'Powerful Android phone with Snapdragon 8 Gen 1.' },
  { id: 3, name: 'Google Pixel 7', price: '$799', img: 'https://i.pinimg.com/564x/24/69/6f/24696ff09256256d3da7eab858891a74.jpg', description: 'Google’s flagship with pure Android experience.' },
  { id: 4, name: 'OnePlus 10 Pro', price: '$699', img: 'https://i.pinimg.com/564x/2b/b5/ed/2bb5edbc038097ca951fb66806d9d937.jpg', description: 'Flagship killer from OnePlus with smooth performance.' },
  { id: 5, name: 'Xiaomi Mi 12', price: '$599', img: 'https://i.pinimg.com/564x/73/44/d6/7344d61be772a9d12c52189a22d7c7a7.jpg', description: 'Affordable phone with premium features.' },
  { id: 6, name: 'Sony Xperia 5 IV', price: '$899', img: 'https://i.pinimg.com/564x/54/1c/9d/541c9d45163fd227700dcd975bf566a3.jpg', description: 'Great multimedia experience with superb camera.' },
  { id: 7, name: 'Oppo Find X5', price: '$849', img: 'https://i.pinimg.com/736x/62/8e/12/628e12c0ce0faa3fcb5f8afee75c08d3.jpg', description: 'Oppo’s innovative phone with sleek design.' },
  { id: 8, name: 'Vivo X80 Pro', price: '$799', img: 'https://i.pinimg.com/564x/1f/69/d1/1f69d1b2717c5be010d9787e0b30b3c1.jpg', description: 'High-performance phone with powerful camera system.' },
  { id: 9, name: 'Realme GT2 Pro', price: '$699', img: 'https://i.pinimg.com/564x/17/55/0e/17550e65af0cd89c5eddb1b4242b5c88.jpg', description: 'High-end specs at a lower price.' },
  { id: 10, name: 'Motorola Edge 30', price: '$649', img: 'https://i.pinimg.com/564x/3b/74/3a/3b743ac69b8bb7067d920eda6546ea53.jpg', description: 'Motorola’s latest entry into the flagship market.' },
];


// Home Page Component
const HomePage = ({ addToCart }) => {
  return (
    <div className='home-page'>
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/36/90/6e/36906e2456e7c97efc6174b63f2d9c53.jpg")', backgroundSize: 'cover' }}>
        <Container>
          <h1 className="display-3 fw-bold">Discover the Latest Smartphones</h1>
          <p className="lead mb-4">Get the best deals on high-end phones with exclusive features and sleek designs.</p>
          <Button className = 'btn btn-primary' as={Link} to="#products">Shop Now</Button>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-5" id="products">
        <Container>
          <h2 className="text-center display-5 mb-4">Featured Products</h2>
          <Row>
            {products.map(product => (
              <Col key={product.id} sm={12} md={4} className="mb-4">
                <Card className="h-100 shadow-lg">
                  <Card.Img variant="top" src={product.img} className="card-img-top" />
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" as={Link} to={`/product/${product.id}`}>
                      View Details
                    </Button>
                    <Button variant="success" className="mt-3" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>Your go-to destination for the latest and greatest in mobile technology. Join us in exploring the best of smartphones!</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-white">Home</Link></li>
                <li><Link to="/cart" className="text-white">Cart</Link></li>
                <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Email: info@mobilestore.com</p>
              <p>Phone: +1 234 567 890</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

// Product Details Page
const ProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) return <h2>Product not found!</h2>;

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img src={product.img} alt={product.name} className="img-fluid shadow-lg" />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <Button variant="success" className="mt-3" onClick={() => { addToCart(product); navigate('/cart'); }}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// Cart Page
const CartPage = ({ cartItems, removeFromCart }) => (
  <Container className="py-5">
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is currently empty.</p>
    ) : (
      <Row>
        {cartItems.map((item, index) => (
          <Col key={index} sm={12} md={4} className="mb-4">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="text-center">
                <Card.Title className="h5">{item.name}</Card.Title>
                <Card.Text className="h6">{item.price}</Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item)}>
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )}
  </Container>
);

// Main App Component
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Mobile Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetailsPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
