
import { useState, useEffect } from 'react';

const Apideux = () => {
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

export default Apideux;