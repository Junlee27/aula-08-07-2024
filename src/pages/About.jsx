import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-page">
    <h1>Sobre Nós</h1>
    <p>Esta é a página Sobre.</p>
    <p><Link to="/">Voltar para a Página Inicial</Link></p>
  </div>
);

export default About;