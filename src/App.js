import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?${as}=${id}");
  const [isBusy, setBusy] = useState(true);
  const [pokeData, setpokeData] = useState([]);

  const addData = (data2) => {
    let updatedItem = [];
    updatedItem = data2.results.map((object) => object.url);
    console.log(updatedItem);
    const newItem = [...pokeData, ...updatedItem];
    setpokeData(newItem, console.log(pokeData))
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
        setBusy(false);
        
        console.log(result);

        console.log(pokeData);
        addData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    //Activate Function
    fetchData();
  }, [url]);

  return (
    <div className="body mx-auto">
      <h1 className="display-1 d-inline-flex p-2">Pokedex</h1>
      <div className="d-flex">
        <h3 className="h3">Search Limit</h3>
        <select className="form-select" aria-label="Search limit">
          <option selected value="20">
            20
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      {isBusy ? (
        <div>Loading...</div>
      ) : (
        <div className=" cardGrid d-flex justify-content-center flex-row">
          {data &&
            data.results.map((object) => {
              const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${object}.png`;
              return (
                <div className="card p-3 m-3 col-md-5" key={object.url}>
                  <img className="card-img-top" src={imgUrl} alt="card" />
                  <div className="card-body">
                    <h3>{object.name}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      ;
      <div className="d-flex flex-row justify-content-around">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            setUrl(data.previous);
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            setUrl(data.next);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
