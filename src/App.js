import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ hits: [] })
  const [sorgu, sorguGuncelle] = useState("react")
  const [ara, araGuncelle] = useState('react')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function veriCek() {
      setIsLoading(true)

      const sonuc = await axios(`https://hn.algolia.com/api/v1/search?query=${ara}`)
      setData(sonuc.data)

      setIsLoading(false)
    };

    veriCek();

  }, [ara]);

  return (
    <>
      <input
        type="text"
        value={sorgu}
        onChange={event => sorguGuncelle(event.target.value)}
      />
      <button type="button" onClick={() => araGuncelle(sorgu)}>
        Ara
      </button>

      <h1>"{ara}" ile ilgili haberler: </h1>

    {isLoading ? (
        <div>Yükleniyor ...</div>
      ) : (
        //hits i buraya yolla
      )
      }

    </>
  );
}

export default App;