
import { useState } from 'react';
import { useEffect } from 'react';
import data from './data';


function Api() {
     // return get json file and return data array
     const [logements, setLogements] = useState('');

     useEffect(() => {
          const jsonData = JSON.stringify(data);
          const jsonParse = JSON.parse(jsonData);
          return setLogements(jsonParse);
     }
     , [logements]);

     return [logements];
};

export default Api;