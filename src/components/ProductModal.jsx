import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ProductModal({ show, onHide, product, onAddToCart }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid mb-3"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
        <p>{product.description}</p>
        <h5 className="text-success">R$ {product.price.toFixed(2)}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => onAddToCart(product)}>
          Adicionar ao carrinho
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
