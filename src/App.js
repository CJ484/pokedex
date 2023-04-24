import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'


function App() {
  const [data, setData] = useState({pokem:[]});
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20')

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(url);
  
      setData(result.data);
    }
    fetchData();
    
  }, []);
  
    console.log(data);
  // const card = data.results.map((object) => {
  //   return (
  //     <div key={object.url}>
  //       <h3>{object.name}</h3>
  //     </div>
  //   )
  // })

  return (
    <div>
      <h1>Pokedex</h1>
      {/* {card.length > 0 ? card : "Loading..."} */}

      <button>Prev</button>
      <button type='button' onClick={() => {setUrl(data.next); }}>Next</button>

    </div>
  );
}

export default App;
