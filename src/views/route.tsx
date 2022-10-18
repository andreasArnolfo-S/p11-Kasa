import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import HomePage from "./homePage/homePage";
import DetailsPage from "./detailsPage/detailsPage";
import AboutPage from "./aboutPage/aboutPage";
import Footer from "../components/footer/footer";
import ErrorPage from "./errorPage/errorPage";

const Router = () => {
  return (
    <>
     {/* Un composant qui est rendu sur chaque page. */}
     <Navbar />
     <Routes>
          {/* Rendu des composants Banner et HomePage. */}
          <Route path='/' element={<React.Fragment><Banner /><HomePage /></React.Fragment>} />
          {/* Rendu du composant DetailsPage. */}
          <Route path='/Logements/:currentId' element={<React.Fragment><DetailsPage /></React.Fragment>} />
          {/* Rendu des composants Banner et AboutPage. */}
          <Route path='/about' element={<React.Fragment><Banner /><AboutPage /></React.Fragment>} />
          {/* Il affichera le composant ErrorPage si l'utilisateur navigue vers
          une route qui n'existe pas. */}
          <Route path='*' element={<React.Fragment><ErrorPage /></React.Fragment>} />
     </Routes>
     {/* Un composant qui est rendu sur chaque page. */}
     <Footer />
    </>
  )
}

export default Router;