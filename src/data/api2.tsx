
import { useState, useEffect } from 'react';

const Apideux = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
          const url = './location.json';

          const fetchData = async () => {
               try {
                    const response = await fetch(url);
                    const json = await response.json();
                    setData(json);
               } catch (error) {
                    console.log('error', error);
               }
          };
          fetchData();
     }, []);

     return [data];

}

export default Apideux;