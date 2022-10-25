import { FC } from "react";
import styles from "./detailsPage.module.css";
import Carousel from "../../components/carousel/carousel";
import Collapse from "../../components/collapse/collapse";
import Rating from '../../components/rating/rating';
import Tags from "../../components/tags/tags";
import Host from '../../components/host/host';

interface DetailsPageProps {
	data: [] | any[];
}

const DetailsPage: FC<DetailsPageProps> = (props) => {
	const currentId = window.location.pathname.split("/")[2];
	const currentLogement = props.data.filter((e) => e.id === currentId);
	const logement = currentLogement[0];

	return (
		<div className={styles.DetailsPage}>
			<Carousel picture={logement.pictures} />
			<section className={styles.logement_infos}>
				<div className={styles.logement_info_title_and_tags}>
					<div className={styles.logement_info_title}>
						<h1>{logement.title}</h1>
						<p>{logement.location}</p>
					</div>
					<Tags tags={logement.tags} />
				</div>
				<div className={styles.logement_profil_and_rates}>
					<Host host={logement.host} />
					<Rating rate={logement.rating} />
				</div>
			</section>
			<section className={styles.logement_description}>
				<Collapse title='Description' content={logement.description} />
				<Collapse title='Equipements' equipments={logement.equipments} />
			</section>
		</div>
	);
};

export default DetailsPage;
