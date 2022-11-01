import React, { FC, useState } from "react";
import styles from "./carousel.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
interface CarouselProps {
	picture: string[];
}

const Carousel: FC<CarouselProps> = (props) => {
  const [count, setCount] = useState(0);

  const next = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setCount(count => count + 1);
  };
  const prev = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setCount(count => count - 1);
  };

  if (count < 0) {
    setCount(props.picture?.length - 1);
  }
  if (count > props.picture?.length - 1) {
    setCount(0);
  }
  
  /* C'est une condition qui vérifie si la longueur du tableau est égale à 1. Si c'est le cas, elle
  renverra l'image sans 'suivant' et 'precedent' */
  if (props.picture?.length === 1) {
    return (
      <div className={styles.Carousel}>
        <img src={props.picture[0]} alt="carousel" />
        <div className={styles.CarouselDots}>
          <p>{ count + 1 }/{ props.picture.length }</p>
        </div>
      </div>
    );
  }

	return (
		<div className={styles.Carousel}>
			{/* Affichage de l'image actuellement sélectionnée. */}
      <div className={styles.CarouselSlide}>
        {props.picture && <img src={props.picture[count]} alt="carousel" />}
			</div>
      {/* boutons qui permettent de passer à l'image suivante ou précédente. */}
      <div className={styles.CarouselButtons}>
        <button type="button" onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button type="button" onClick={next}><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      {/* Affichage du numéro de la photo actuelle et du nombre total de photos. */}
      <div className={styles.CarouselDots}>
        <p>{ count + 1 }/{ props.picture?.length }</p>
      </div>
		</div>
	);
};

export default Carousel;