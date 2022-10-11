import React, { FC } from 'react';
import styles from './banner.module.css';

interface BannerProps {}

const Banner: FC<BannerProps> = () => (
  <div className={styles.Banner}>
    <h1>Chez vous, partout et ailleurs</h1>
  </div>
);

export default Banner;
