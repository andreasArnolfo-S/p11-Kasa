import React, { FC } from 'react';
import styles from './aboutPage.module.css';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => (
  <div className={styles.AboutPage}>
    AboutPage Component
  </div>
);

export default AboutPage;
