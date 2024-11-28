import React, { useEffect, useState } from 'react';

const Aliments = () => {
  const [filteredBoxes, setFilteredBoxes] = useState([]);

  useEffect(() => {
    fetch('/api/boxes.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Problème avec la requête ');
        }
        return response.json();
      })
      .then(data => {
        const filtered = data.filter(box =>
          box.aliments.some(aliment =>
            aliment.nom.toLowerCase().includes('coriandre') || aliment.nom.toLowerCase().includes('avocat')
          )
        );
        setFilteredBoxes(filtered);
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (



    <div style={styles.container}>
        <h1>Saveur avec de la coriandre ou de l'avocat SushiFast</h1>
      {filteredBoxes.map(box => (
        <div key={box.id} style={styles.box}>
          <h2>{box.nom}</h2>
          <p>Pièces: {box.pieces}</p>
          <p>Prix: {box.prix} €</p>
          <img src={`/${box.image}.jpg`} alt={box.nom} style={styles.image} />
          <h3>Aliments:</h3>
          <ul>
            {box.aliments.map((aliment, index) => (
              <li key={index}>
                {aliment.nom} - Quantité: {aliment.quantite}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px'
  },
  box: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '300px',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 'auto'
  },
 
};

export default Aliments;