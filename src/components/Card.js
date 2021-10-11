import React from 'react';

const Card = (props) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{props.header}</h1>
      {props.children}
    </div>
  );

  };

export default Card;

const styles = {
  header: {
    color:'#444'
  },
  container: {
    margin: '12px',
    padding: '12px',
    borderRadius:'14px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }
}