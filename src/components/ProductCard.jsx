import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '250px', objectFit: 'contain' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">R$ {product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">Ver detalhes</Link>
      </div>
    </div>
  );
}
