import React, { FC } from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface RatingProps {
  rate: string;
 }

const Rating: FC<RatingProps> = (props) => {
  const stars = () => {
    const maxRate = 5;
    const currentRate = parseInt(props.rate);

    let stars = [];
    /* C'est une boucle qui crée un nombre d'étoiles égal à la note de l'hôte. */
    for (let i = 0; i < maxRate; i++) {
      if (i < currentRate) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={styles.StarYellow}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={styles.StarEmpty}
          />
        );
      }
    }
    return stars;
  };
  return (
    <p key={props.rate}>{stars()}</p>
  );
};
export default Rating;
