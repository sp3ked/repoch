import React from 'react';
import styles from './card.module.css';

interface CardProps {
  name: string;
  description: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ name, description, category }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className={styles.category}>{category}</span>
    </div>
  );
};

export default Card;