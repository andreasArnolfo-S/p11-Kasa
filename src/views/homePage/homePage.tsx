import styles from './homePage.module.css';
import Card from '../../components/card/card';
import { FC } from 'react';

interface HomePageProps {
  data: [] | any[];
}

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <div className={styles.HomePage}>
      {props.data.map((e) => <Card key={e.id} {...e} />)}
    </div>
  );
};
export default HomePage;
