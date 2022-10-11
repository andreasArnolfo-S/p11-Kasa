import React, { FC } from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  description: string;
  pictures: string[];
  tags: string[];
  rating: string;
  location: string;
  equipments: string[];
  cover: string;
  host :{
    name: string;
    picture: string;
  };
}

const Card: FC<CardProps> = (e) => {
  const logementPageUrl = "/Logements/" + e.id;

	return (
		<Link to={logementPageUrl} className={styles.Card}>
			<img src={e.pictures[0]} alt={e.title} />
			<div className={styles.CardInfo}>
				<p>{e.title}</p>
			</div>
		</Link>
	);
};

export default Card;
