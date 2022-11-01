
import { useState, useEffect } from 'react';


const useApi = (url: string) => {
     // const url = '../location.json';
     const [logements, setLogements] = useState<any[]>([]);

     useEffect(() => {
          fetch(url)
               .then((res) => res.json())
               .then((data) => {
                    setLogements(data);
               })
     }, []);

     return logements;
}

export default useApi;