import React, { FC } from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  pictures?: string[];
  tags?: string[];
  rating?: string;
  location?: string;
  equipments?: string[];
  cover?: string;
  host?: {
    name?: string;
    picture?: string;
  };
}

const Card: FC<CardProps> = (props) => {
  const logementPageUrl = "/Logements/" + props.id;

  return (
    <Link to={logementPageUrl} className={styles.Card}>
      <img src={props.pictures ? props.pictures[0] : ''} alt={props.title} />
      <div className={styles.filter}>
        <div className={styles.CardInfo}>
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
