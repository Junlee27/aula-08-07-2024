import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <h1>Página Inicial</h1>
    <p>Bem-vindo ao nosso site!</p>
    <nav>
      <ul>
        <li><Link to="/about"><i className='bx bx-user'></i> Sobre Nós</Link></li>
        <li><Link to="/contact"><i className='bx bx-envelope'></i> Contato</Link></li>
        <li><Link to="/products"><i className='bx bx-store'></i> Produtos</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;