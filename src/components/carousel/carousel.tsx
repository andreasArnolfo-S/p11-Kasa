import React, { FC, useState } from "react";
import styles from "./carousel.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
interface CarouselProps {
	picture: string[];
}

const Carousel: FC<CarouselProps> = (e) => {
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
    setCount(e.picture.length - 1);
  }
  if (count > e.picture.length - 1) {
    setCount(0);
  }

	return (
		<div className={styles.Carousel}>
			{/* Affichage de l'image actuellement sélectionnée. */}
      <div className={styles.CarouselSlide}>
        <img src={e.picture[count]} alt="carousel" />
			</div>
      {/* boutons qui permettent de passer à l'image suivante ou précédente. */}
      <div className={styles.CarouselButtons}>
        <button type="button" onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button type="button" onClick={next}><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      {/* Affichage du numéro de la photo actuelle et du nombre total de photos. */}
      <div className={styles.CarouselDots}>
        <p>{ count + 1 }/{ e.picture.length }</p>
      </div>
		</div>
	);
};

export default Carousel;
