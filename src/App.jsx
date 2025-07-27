import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProductModal from "./components/ProductModal";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false); // novo estado

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setShowModal(false);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <>
      <Navbar cartItems={cartItems} onCartClick={toggleCart} />
      <Container className="pt-5 mt-4 my-4">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm" onClick={() => handleOpenModal(product)} style={{ cursor: "pointer" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6">{product.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1" style={{ overflow: "hidden" }}>
                    {product.description.slice(0, 80)}...
                  </Card.Text>
                  <div className="text-end fw-bold text-success">R$ {product.price.toFixed(2)}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ProductModal
        show={showModal}
        onHide={handleCloseModal}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      <Cart
        show={showCart}
        onClose={toggleCart}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />
    </>
  );
}