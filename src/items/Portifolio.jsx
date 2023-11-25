import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetch('https://contacts-api.tarleylana.repl.co/')
      .then(response => response.json())
      .then(data => setPortfolioItems(data));
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="gallery-container">
        {portfolioItems.map((item, index) => (
          <div className="gallery-items" key={index}>
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
