import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notfound-page">
    <h1>404 - Página Não Encontrada</h1>
    <p>A página que você está procurando não existe.</p>
    <p><Link to="/">Voltar para a Página Inicial</Link></p>
  </div>
);

export default NotFound;