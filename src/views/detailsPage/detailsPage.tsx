import React, { FC } from "react";
import styles from "./detailsPage.module.css";
import { data } from "../../data/api";
import Carousel from "../../components/carousel/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../../components/collapse/collapse";

interface DetailsPageProps {}

const DetailsPage: FC<DetailsPageProps> = () => {
	/* Il récupère l'identifiant du logement actuel à partir de l'url puis filtre les données pour obtenir
	le logement actuel. */
	const currentId = window.location.pathname.split("/")[2];
	const currentLogement = data.filter((e) => e.id === currentId);
	const e = currentLogement[0];


	/**
	 * Crée un tableau d'étoiles, où le nombre d'étoiles jaunes est égal à la note de l'hôte
	 * @returns Un tableau de FontAwesomeIcons.
	 */
	const stars = () => {
		const maxRate = 5;
		const currentRate = parseInt(e.rating);

		let stars = [];
		/* C'est une boucle qui crée un nombre d'étoiles égal à la note de l'hôte. */
		for (let i = 0; i < maxRate; i++) {
			if (i < currentRate) {
				stars.push(
					<FontAwesomeIcon
						icon={faStar}
						className={styles.StarYellow}
					/>
				);
			} else {
				stars.push(
					<FontAwesomeIcon
						icon={faStar}
						className={styles.StarEmpty}
					/>
				);
			}
		}
		return stars;
	};

	return (
		<div className={styles.DetailsPage}>
			<Carousel picture={e.pictures} />
			<section className={styles.logement_info}>
				<div className={styles.logement_info_title}>
					<h1>{e.title}</h1>
					<p>{e.location}</p>
				</div>
				<div className={styles.logement_profil}>
					<p>{e.host.name}</p>
					<img
						src={e.host.picture}
						alt={e.host.name}
					/>
				</div>
			</section>
			<section className={styles.logement_tags_rates}>
				<div className={styles.logement_tags}>
					{e.tags.map((e) => (
						<p key={e.toString()}>{e}</p>
					))}
				</div>
				<div className={styles.logement_rates}>
					<p>{stars()}</p>
				</div>
			</section>
			<Collapse {...e}/>
		</div>
	);
};

export default DetailsPage;
