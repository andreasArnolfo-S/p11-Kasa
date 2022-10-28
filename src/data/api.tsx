
import { useState, useEffect } from 'react';

const Api = () => {
     const url = 'location.json';
     const [logements, setLogements] = useState<any[]>([]);

     useEffect(() => {
          fetch(url)
               .then((res) => res.json())
               .then((data) => {
                    setLogements(data);
               })
     }, []);

     return [logements];
}

export default Api;