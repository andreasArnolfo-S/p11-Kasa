import React, { FC } from 'react';
import styles from './banner.module.css';

interface BannerProps {
  img: string;
  txt?: string;
}

const Banner: FC<BannerProps> = (props) => (
  <div className={styles.Banner} style={{backgroundImage: `url(${props.img})`}}>
    <div className={styles.banner_infos}>
    </div>
    <h1>{props.txt ? props.txt : ""}</h1>

  </div>
);

export default Banner;
