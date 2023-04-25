import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'


function App() {
  const [data, setData] = useState({pokem:[]});
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20')
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setBusy(false)
      setData(result.data);
    }
    fetchData();
    
  }, [url]);
  


  return (
    <div>
      {isBusy ? (
        <div>Loading...</div>
        ) : (
          <div>
          {data && data.results.map((object)=> {
          return (
              <div className="card" key={object.url}>
                <img className="card-img-top" src="..." alt="card" />
                <div className="card-body">
                  <h3>{object.name}</h3>
                </div>
              </div>)
              }
            )
          }
          </div>
        )};

      
     

      <button type="button" onClick={()=> {setUrl(data.previous); }}>Prev</button>
      <button type='button' onClick={() => {setUrl(data.next); }}>Next</button>

    </div>
  );
}

export default App;
