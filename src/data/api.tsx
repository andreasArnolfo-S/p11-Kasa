
import { useState, useEffect } from 'react';


const useApi = (url: string) => {
     // const url = '../location.json';
     const [logements, setLogements] = useState<any[]>([]);

     useEffect(() => {
          const fetchData = async () => {
               const response = await fetch(url);
               const data = await response.json();
               setLogements(data);
          }
          fetchData();
     }, [url]);
     
     return logements;
}

export default useApi;