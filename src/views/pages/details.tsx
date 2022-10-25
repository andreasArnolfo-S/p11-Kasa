import { FC } from "react";
import DetailsPage from "../detailsPage/detailsPage";

interface DetailsProps {
     data: [] | any[];
}

const Detail: FC<DetailsProps> = (props) => (
     <>
          <DetailsPage data={props.data} />
     </>
)

export default Detail;