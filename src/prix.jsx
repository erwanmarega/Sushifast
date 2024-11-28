import React from 'react';
import { useLocation } from 'react-router-dom';

const Prix = () => {
  const location = useLocation();
  const { selectedBoxes } = location.state || { selectedBoxes: [] };

  const totalPrix = selectedBoxes.reduce((total, box) => total + box.prix, 0);

  return (
    <div style={styles.container}>
      <h1>Panier</h1>
      {selectedBoxes.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {selectedBoxes.map((box, index) => (
            <div key={index} style={styles.box}>
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
          <div style={styles.total}>
            <h2>Prix total de la commande: {totalPrix.toFixed(2)} €</h2>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    minHeight: '100vh'
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
  total: {
    marginTop: '20px',
    textAlign: 'center'
  }
};

export default Prix;