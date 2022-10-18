import React, { FC } from "react";
import styles from "./navbar.module.css";
import { NavLink } from 'react-router-dom';

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {

	let activeStyle = {
		textDecoration: "underline",
	};

	let unactiveStyle = {
		textDecoration: "none",
	};

	return (
		<div className={styles.Navbar}>
			<img
				className={styles.Logo}
				src="https://user.oc-static.com/upload/2020/08/14/15974111893356_Screen%20Shot%202020-07-08%20at%2018.17.37%20%281%29.jpg"
				alt="logo"
			></img>
			<div className={styles.NavbarItems}>
				<NavLink to="/" style={({ isActive }) =>
					isActive ? activeStyle : unactiveStyle
				}
				end>
					Accueil
				</NavLink>
				<NavLink to="about" style={({ isActive }) =>
					isActive ? activeStyle : unactiveStyle
				}>
					A Propos
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
