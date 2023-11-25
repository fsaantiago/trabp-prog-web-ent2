import React from 'react';

function Header() {
  return (
    <header>
      <h1>Stephanie Soares Fotografia</h1>
      {
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      }
    </header>
  );
}

export default Header;
