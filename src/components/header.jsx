import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>SushiFast</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/">Accueil</Link></li>
          <li style={styles.navItem}><Link to="/aliments">Saveurs</Link></li>
          <li style={styles.navItem}><Link to="/menu">Menu</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px', 
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: '1000'
  },
  title: {
    margin: '0'
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    margin: '0'
  },
  navItem: {
    margin: '0 10px'
  }
};

export default Header;