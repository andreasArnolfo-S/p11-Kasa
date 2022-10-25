
import { useState } from 'react';
import { useEffect } from 'react';
import data from './data';


function Api() {
     // return get json file and return data array
     const [logements, setLogements] = useState<any[]>([]);

     useEffect(() => {
          const jsonData = JSON.stringify(data);
          const jsonParse = JSON.parse(jsonData);
          return setLogements(jsonParse);
     }
     , []);

     return [logements];
};

export default Api;