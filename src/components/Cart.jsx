import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

export default function Cart({ show, onClose, items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Seu Carrinho</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ListGroup variant="flush">
            {items.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.title}</strong>
                  <div className="text-muted">R$ {item.price.toFixed(2)}</div>
                </div>
                <Button variant="danger" size="sm" onClick={() => onRemove(index)}>Remover</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="me-auto">
          <strong>Total: R$ {total.toFixed(2)}</strong>
        </div>
        <Button variant="secondary" onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}
