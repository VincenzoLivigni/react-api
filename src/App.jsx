import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [listAttrici, setListAttrici] = useState([]);
  const [listAttori, setListAttori] = useState([]);
  const api = "https://lanciweb.github.io/demo/api/actresses/";
  const api2 = "https://lanciweb.github.io/demo/api/actors/";

  useEffect(fetchGenera, [])
  useEffect(fetchGeneraAttori, [])

  function fetchGenera() {
    axios
      .get(api)
      .then(res => {
        setListAttrici(res.data);
        console.log(res.data);
      })
  }

  function fetchGeneraAttori() {
    axios
      .get(api2)
      .then(res => {
        setListAttori(res.data);
        console.log(res.data);
      })
  }

  return (
    <>
      <main>
        <div className="container">
          <h1 className="py-3 text-center">Attrici</h1>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 py-5">

            {
              listAttrici.map((attrice) => (
                <div key={attrice.id} className="col">
                  <div className="card-content-attrici">
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

        <div className="container">
          <h1 className="py-3 text-center">Attori</h1>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 py-5">
            {
              listAttori.map((attore) => (
                <div key={attore.id} className="col">
                  <div className="card-content-attori">
                    <img src={attore.image} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h3>{attore.name}</h3>
                      <span><strong>Biography:</strong> {attore.biography}</span>
                      <span><strong>Birth year:</strong> {attore.birth_year}</span>
                      <span><strong>Nationality:</strong> {attore.nationality}</span>
                      <span><strong>Awards:</strong> {attore.awards}</span>
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
