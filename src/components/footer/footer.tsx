import React, { FC } from 'react';
import styles from './footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer}>
    <img className={styles.footer_logo} src='https://cdn.discordapp.com/attachments/978413517780697141/1028066919158394900/Capture_decran_2022-10-08_000956.png' alt='Logo' />
    <p>2020 Kasa. All rights reserved</p>
  </div>
);

export default Footer;
