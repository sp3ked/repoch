import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  name: string;
  description: string;
  category: string;
  isLoading: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  category,
  isLoading,
}) => {
  return (
    <div className={`${styles.card} ${isLoading ? styles.loading : ""}`}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardCategory}>{category}</span>
    </div>
  );
};

export default Card;
