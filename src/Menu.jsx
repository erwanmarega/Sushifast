import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [boxes, setBoxes] = useState([]);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [mostExpensiveBox, setMostExpensiveBox] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/boxes.json')
      .then(response => response.json())
      .then(data => setBoxes(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  const addToCart = (box) => {
    setSelectedBoxes([...selectedBoxes, box]);
  };

  const goToPrixPage = () => {
    navigate('/prix', { state: { selectedBoxes } });
  };

  const showMostExpensiveBox = () => {
    if (boxes.length > 0) {
      const expensiveBox = boxes.reduce((prev, current) => (prev.prix > current.prix) ? prev : current);
      setMostExpensiveBox(expensiveBox);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Menu</h1>
      <button onClick={goToPrixPage} style={styles.cartButton}>Voir le panier</button>
      <button onClick={showMostExpensiveBox} style={styles.expensiveButton}>Afficher le menu le plus cher</button>
      <div style={styles.menuContent}>
        {boxes.map(box => (
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
            <button onClick={() => addToCart(box)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
      {mostExpensiveBox && (
        <div style={styles.expensiveBox}>
          <h2>Menu le plus cher</h2>
          <h3>{mostExpensiveBox.nom}</h3>
          <p>Pièces: {mostExpensiveBox.pieces}</p>
          <p>Prix: {mostExpensiveBox.prix} €</p>
          <img src={`/${mostExpensiveBox.image}.jpg`} alt={mostExpensiveBox.nom} style={styles.image} />
          <h3>Aliments:</h3>
          <ul>
            {mostExpensiveBox.aliments.map((aliment, index) => (
              <li key={index}>
                {aliment.nom} - Quantité: {aliment.quantite}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '20px'
  },
  menuContent: {
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
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
  cartButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    fontSize: '16px'
  },
  expensiveButton: {
    position: 'absolute',
    top: '20px',
    right: '150px',
    padding: '10px 20px',
    fontSize: '16px'
  },
  expensiveBox: {
    marginTop: '20px',
    width: '50%',
    border: '2px solid #ff0000',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center'
  }
};

export default Menu;