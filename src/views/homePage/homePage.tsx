import React, { FC } from 'react';
import styles from './homePage.module.css';
import Card from '../../components/card/card';
import { data } from '../../data/api';

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage}>
    {data.map((e) => <Card key={e.id} {...e} />)}
  </div>
);

export default HomePage;
