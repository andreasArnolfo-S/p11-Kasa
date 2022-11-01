import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Detail from './pages/details';

const Router = () => {

  return (
    <>
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Logements/:currentId' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
     </Routes>
    </>
  )
}

export default Router;