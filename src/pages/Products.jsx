import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => (
  <div className="products-page">
    <h1>Produtos</h1>
    <ul>
      <li>Banana</li>
      <li>Maçã</li>
      <li>Uva</li>
      <li>Laranja</li>
      <li>Cebola</li>
    </ul>
    <p><Link to="/">Voltar para a Página Inicial</Link></p>
  </div>
);

export default Products;