import React, { FC } from "react";
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
	<div className={styles.Navbar}>
		<img
			className={styles.Logo}
			src="https://user.oc-static.com/upload/2020/08/14/15974111893356_Screen%20Shot%202020-07-08%20at%2018.17.37%20%281%29.jpg"
			alt="logo"
		></img>
		<div className={styles.NavbarItems}>
			<a href="/" className={styles.link}>
				Accueil
			</a>
			<Link to="/about" className={styles.link}>
				A Propos
			</Link>
		</div>
	</div>
);

export default Navbar;
