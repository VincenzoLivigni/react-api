import axios from "axios"
import { useState, useEffect } from "react"


function App() {
  const [listAttrici, setListAttrici] = useState([]);
  const api = "https://lanciweb.github.io/demo/api/actresses/";

  useEffect(fetchGenera, [])

  function fetchGenera() {
    axios
      .get(api)
      .then(res => {
        setListAttrici(res.data);
        console.log(res.data);
      })
  }

  return (
    <>
      <header>
        <h1>Attrici</h1>
      </header>

      <main>
        <div className="card-container">
          {
            listAttrici.map((attrice) => (
              <div key={attrice.id} className="card-content mb-4 bg-warning">
                <img src={attrice.image} alt="" />
                <h4>{attrice.name}</h4>
                <p>{attrice.birth_year}</p>
                <p>{attrice.nationality}</p>
                <p>{attrice.biography}</p>
                <p>{attrice.awards}</p>
              </div>
            ))
          }
        </div>
      </main >
    </>
  )
}
export default App

{/*
  MILESTONE 2

Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:
*/}