import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Erro ao buscar detalhes:', err));
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid p-4" alt={product.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <h6 className="card-subtitle mb-2 text-muted">Categoria: {product.category}</h6>
            <p className="card-text fw-bold">Preço: R$ {product.price.toFixed(2)}</p>
            <button className="btn btn-success">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </div>
  );
}
