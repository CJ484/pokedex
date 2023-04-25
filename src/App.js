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
      console.log(result.data);
    }
    fetchData();
    
  }, [url]);
  


  return (
    <div className='body' >
      <h1 className='display-1'>Pokedex</h1>
      {isBusy ? (
        <div>Loading...</div>
        ) : (
          <div className=' cardGrid d-flex justify-content-md-center flex-row'>
          {data && data.results.map((object)=> {
          return (
              <div className="card p-3 m-3 col-md-3" key={object.url}>
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

      
     
      <div className='d-flex flex-row'>
        <button className="btn btn-secondary" type="button" onClick={()=> {setUrl(data.previous); }}>Prev</button>
        <button className="btn btn-secondary" type='button' onClick={() => {setUrl(data.next); }}>Next</button>
      </div>

    </div>
  );
}

export default App;
