import styles from './homePage.module.css';
import Card from '../../components/card/card';
import data from '../../data/data';
import Api from '../../data/api';

const HomePage = () => {


  return (
    <div className={styles.HomePage}>
      {data.map((e) => <Card key={e.id} {...e} />)}
    </div>
  );
};
export default HomePage;
