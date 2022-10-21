import React, { FC, useState } from "react";
import styles from "./collapse.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


interface CollapseProps {
	title?: string;
	content?: string;
	equipments?: string[];
}

const Collapse: FC<CollapseProps> = (props) => {
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
				{props.title} <FontAwesomeIcon className={styles.iconDown} icon={isActive ? faChevronDown : faChevronUp} />
			</button>
			<div
				className={styles.contentCollapsible}
				style={
					isActive
						? { display: "block" }
						: { display: "none" }
				}
			>
				<p>{props.equipments ? props.equipments!.map((el) => <li key={el}>{el}</li>) : props.content}</p>
			</div>
		</div>
	);
};
export default Collapse;
