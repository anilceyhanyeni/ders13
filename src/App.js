import { useState, useEffect } from "react";

function App() {

  let [dogImage, setDogImage] = useState(null)

  useEffect(() => {
    /*
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogImage(data.message))
    */

    async function gorselCek() {
      const yanit = await fetch("https://dog.ceo/api/breeds/image/random")
      const veri = await yanit.json()

      setDogImage(veri.message)
    }

    gorselCek()

  }, [])

  return (
    <div>
      { dogImage && <img src={dogImage} alt="" /> }
    </div>
  );
}

export default App;
