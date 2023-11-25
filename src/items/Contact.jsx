import React from 'react';

function Contact() {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <p>Estou disponível para agendar sessões de fotos e responder a todas as suas perguntas. Entre em contato comigo:</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email_usuario" placeholder="name@email.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome_completo" placeholder="Nome completo" required />
        </div>
        <div className="form-group">
          <label htmlFor="assunto">Assunto:</label>
          <input type="text" id="assunto" name="titulo-assunto" placeholder="Digite o assunto" />
        </div>
        <div className="form-group">
          <label htmlFor="texto">Mensagem:</label>
          <textarea id="texto" name="texto_usuario" placeholder="Digite a mensagem que deseja"></textarea>
        </div>
        <div className="form-group submit-button">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
