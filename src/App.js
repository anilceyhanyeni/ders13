import { useEffect, useState } from "react";
import Karakter from "./Karakter";
import Filmler from "./Filmler";

function App() {

  const [karakter, karakterGuncelle] = useState(null);
  const [kisiNo, kisiNoGuncelle] = useState("")
  const [hata, hataGuncelle] = useState(null)

  const veriCek = async () => {
    if (kisiNo) {
      const response = await fetch(`https://swapi.dev/api/people/${kisiNo}/`);

      if (response.status === 404) { //kişi bulunamadı
        hataGuncelle("Kişi bulunamadı")
        karakterGuncelle(null)
      } else {
        const veri = await response.json();
        karakterGuncelle(veri)
        hataGuncelle(null)
      }
    }
  };

  useEffect(() => {
    veriCek();
  }, []);


  function aramaYap() {
    veriCek()
  }


  return (

    <div className="container">
      <div className="row">
        <input value={kisiNo} onChange={(olay) => { kisiNoGuncelle(olay.target.value) }} type="number" />
        <button onClick={aramaYap}>Bul</button>
      </div>

      {hata ? hata : ""}

      {karakter ?
        (<div className="row">
          <Karakter person={karakter} />
          <Filmler filmler={karakter.films} />
        </div>)
        :
        (<div>
          Lütfen bir kişi no girin ve arama butonuna basın.
        </div>)
      }

    </div>

  )

}

export default App;
