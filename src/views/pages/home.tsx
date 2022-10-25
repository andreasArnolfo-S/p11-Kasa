import { FC } from 'react';
import Banner from './../../components/banner/banner';
import HomePage from './../homePage/homePage';

interface HomeProps {
     data: [] | any[];
}
const Home: FC<HomeProps> = (props) => (
     <>
          <Banner txt='Chez vous, partout et ailleurs' img='https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
          <HomePage data={props.data}/>
     </>
)

export default Home;