import { useRef, useState } from "react";
function App() {

  const [sayi, sayiGuncelle] = useState(0)
  
  const ref1 = useRef(1)

  if ( sayi > 5) {
    ref1.current = 5
  }

  console.log(ref1)

  return (
    <div>
      {sayi}
      <button onClick={ () => {sayiGuncelle(oncekiSayi => oncekiSayi +1) }}>Arttır</button>
    </div>
  );
}

export default App;
