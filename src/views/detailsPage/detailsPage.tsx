import { FC } from "react";
import styles from "./detailsPage.module.css";
import Carousel from "../../components/carousel/carousel";
import Collapse from "../../components/collapse/collapse";
import data from './../../data/data';
import Rating from '../../components/rating/rating';
import Tags from "../../components/tags/tags";

interface DetailsPageProps {

 }

const DetailsPage: FC<DetailsPageProps> = () => {
	/* Il récupère l'identifiant du logement actuel à partir de l'url puis filtre les données pour obtenir
	le logement actuel. */
	const currentId = window.location.pathname.split("/")[2];
	const currentLogement = data.filter((e) => e.id === currentId);
	const e = currentLogement[0];


	return (
		<div className={styles.DetailsPage}>
			<Carousel picture={e.pictures} />
			<section className={styles.logement_infos}>
				<div className={styles.logement_info_title_and_tags}>
					<div className={styles.logement_info_title}>
						<h1>{e.title}</h1>
						<p>{e.location}</p>
					</div>
					<div className={styles.logement_tags}>
						<Tags tags={e.tags} />
					</div>
				</div>
				<div className={styles.logement_profil_and_rates}>
					<div className={styles.logement_profil}>
						<p>{e.host.name}</p>
						<img
							src={e.host.picture}
							alt={'Photo de profile de' + e.host.name}
						/>
					</div>
					<div className={styles.logement_rates}>
						<Rating rate={e.rating}/>
					</div>
				</div>
			</section>
			<section className={styles.logement_description}>
				<Collapse title='Description' content={e.description} />
				<Collapse title='Equipements' equipments={e.equipments} />
			</section>
		</div>
	);
};

export default DetailsPage;
