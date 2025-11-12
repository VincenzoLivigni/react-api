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
        console.log(res.data);
        setListAttrici(res.data);
      })
  }

  return (
    <>
      <h1>Attrici</h1>

    </>
  )
}
export default App

