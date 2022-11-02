import styles from './homePage.module.css';
import Card from '../../components/card/card';


const HomePage = (props:any) => {
  
  return (
    <div className={styles.HomePage}>
      {props.data.map((e:any) => <Card key={e.id} {...e} />)}
    </div>
  );
  
};
export default HomePage;
