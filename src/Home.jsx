import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <img src="/Restaurant.jpg" alt="Restaurant" style={styles.image} />
    </div>
  );
};



const styles = {
  container: {
    textAlign: 'center',
    padding: '0',
    margin: '0',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
};

export default Home;