import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.copy}>&copy; 2024 SushiFast</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    width: '100%',
    marginTop: 'auto'
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
  },
  copy: {
    marginTop: '10px'
  }
};

export default Footer;