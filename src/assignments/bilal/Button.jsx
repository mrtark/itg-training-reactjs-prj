import React, { useState } from 'react';

const Button = () => {
  const [boyut, setBoyut] = useState(70);
  const [renk, setRenk] = useState('yellow');
 
  const artir = () => {
    setBoyut(boyut + 100);
    renkDegistir();
  };

  const azalt = () => {
    if (boyut > 0) {
      setBoyut(boyut - 100);
      renkDegistir();
    }
  };

  const renkDegistir = () => {
    const yeniRenk = renk === 'yellow' ? 'red' : 'yellow';
    setRenk(yeniRenk);
  };

  return (
    <div>
      <button
        style={{ width: `${boyut}px`, height: `${boyut}px`, backgroundColor: renk }}
        onClick={() => {
          artir();
          renkDegistir();
        }}
      >
        Artır 
      </button>

      <button
       style={{ width: `${boyut}px`, height: `${boyut}px`, backgroundColor: renk }}
       onClick={azalt}
       >
        Azalt
       </button>
    </div>
  );
}

export default Button;