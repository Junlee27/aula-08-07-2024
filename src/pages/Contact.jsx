import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
  <div className="contact-page">
    <h1>Contato</h1>
    <p>Se você tiver alguma pergunta, não hesite em nos contatar.</p>
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
    <p><Link to="/">Voltar para a Página Inicial</Link></p>
  </div>
);

export default Contact;