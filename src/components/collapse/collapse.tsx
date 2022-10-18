import React, { FC, useState } from "react";
import styles from "./collapse.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


interface CollapseProps {
	t?: string;
	content?: string;
	equipments?: string[];
}

const Collapse: FC<CollapseProps> = (e) => {
	const [isActive, setActive] = useState(false);
	/**
	 * Si l'état actuel du composant est actif, définissez l'état sur inactif, et vice versa.
	 */
	const toggleClass = () => {
		setActive((isActive) => !isActive);
	};
	

	return (
		<div className={styles.Collapse}>
			<button
				onClick={toggleClass}
				className={styles.collapsible}
			>
				{e.t} <FontAwesomeIcon className={styles.iconDown} icon={isActive ? faChevronDown : faChevronUp} />
			</button>
			<div
				className={styles.contentCollapsible}
				style={
					isActive
						? { display: "none" }
						: { display: "block" }
				}
			>
				<p>{e.t === 'Equipements' ? e.equipments!.map((el) => <li>{el}</li>) : e.content}</p>
			</div>
		</div>
	);
};
export default Collapse;
