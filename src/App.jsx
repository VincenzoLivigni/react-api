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
      <header className="py-3 text-center">
        <h1>Attrici</h1>
      </header>

      <main>
        <div className="container">
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            {
              listAttrici.map((attrice) => (
                <div key={attrice.id} className="col">
                  <div className="card-content">
                    <img src={attrice.image} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h3>{attrice.name}</h3>
                      <span><strong>Biography:</strong> {attrice.biography}</span>
                      <span><strong>Birth year:</strong> {attrice.birth_year}</span>
                      <span><strong>Nationality:</strong> {attrice.nationality}</span>
                      <span><strong>Awards:</strong> {attrice.awards}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
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