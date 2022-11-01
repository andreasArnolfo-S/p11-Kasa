import { FC } from "react";
import DetailsPage from "../detailsPage/detailsPage";
import useApi from './../../data/api';


const Detail = () => {
     const logements = useApi('../location.json');
     return (
          <>
               <DetailsPage data={logements} />
          </>
     )
}

export default Detail;