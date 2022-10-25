import styles from './homePage.module.css';
import Card from '../../components/card/card';
// import data from '../../data/data';
import Api from '../../data/api';
import Apideux from '../../data/api2';

const HomePage = () => {
  const [logements] = Api();

  const [data] = Apideux();
  console.log(data);
  

  return (
    <div className={styles.HomePage}>
      {logements.map((e) => <Card key={e.id} {...e} />)}
    </div>
  );
};
export default HomePage;
