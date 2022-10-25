import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Detail from './pages/details';
import Apideux from '../data/api2';

const Router = () => {
  const [logements] = Apideux();
  
  return (
    <>
     <Routes>
          <Route path='/' element={<Home data={logements}/>} />
          <Route path='/Logements/:currentId' element={<Detail data={logements} />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
     </Routes>
    </>
  )
}

export default Router;