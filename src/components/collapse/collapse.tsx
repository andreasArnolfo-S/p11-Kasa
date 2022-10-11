import React, { FC, useState } from "react";
import styles from "./collapse.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


interface CollapseProps {
	description: string;
	equipments: string[];
}

const Collapse: FC<CollapseProps> = (e) => {
	const [isActive, setActive] = useState(false);
	const [isActive2, setActive2] = useState(false);

	/**
	 * Si l'état actuel du composant est actif, définissez l'état sur inactif, et vice versa.
	 */
	const toggleClass = () => {
		setActive((isActive) => !isActive);
	};

	const toggleClass2 = () => {
		setActive2((isActive2) => !isActive2);
	};

	const listOfEquipments = e.equipments.map((e) => <li key={e.toString()}>{e}</li>);

	return (
		<div className={styles.Collap}>
			<div className={styles.Collapse}>
				<button
					onClick={toggleClass}
					className={styles.collapsible}
				>
					Description <FontAwesomeIcon className={styles.iconDown} icon={isActive ? faChevronDown : faChevronUp} />
				</button>
				<div
					className={styles.contentCollapsible}
					style={
						isActive
							? { display: "none" }
							: { display: "block" }
					}
				>
					<p>{e.description}</p>
				</div>
			</div>
			<div className={styles.Collapse}>
				<button
					onClick={toggleClass2}
					className={styles.collapsible}
				>
					Équipements <FontAwesomeIcon className={styles.iconDown} icon={isActive2 ? faChevronDown : faChevronUp} />
				</button>
				<div
					className={styles.contentCollapsible}
					style={
						isActive2
							? { display: "none" }
							: { display: "block" }
					}
				>
					<ul>
						{listOfEquipments}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Collapse;
