import React, { FC } from "react";
import styles from "./navbar.module.css";
import { NavLink } from 'react-router-dom';

interface NavbarProps {
 }

const Navbar: FC<NavbarProps> = () => {

	return (
		<div className={styles.Navbar}>
			<img
				className={styles.Logo}
				src="https://user.oc-static.com/upload/2020/08/14/15974111893356_Screen%20Shot%202020-07-08%20at%2018.17.37%20%281%29.jpg"
				alt="logo"
			></img>
			<div className={styles.NavbarItems}>
				<NavLink to="/" style={({isActive}) => {
					return {
						textDecorationLine: isActive ? 'underline' : 'none'
					}
				}}>
					Accueil
				</NavLink>
				<NavLink to="/about" style={({isActive}) => {
					return {
						textDecorationLine: isActive ? 'underline' : 'none'
					}
				}}>
					A Propos
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
