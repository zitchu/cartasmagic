// src/App.js
import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  const cards = [
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480501/6661f17fc0ff0-th6aq-fnbza-76883959e639170590060897f85b3549.jpg", text: "inglês, foil texturizado" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480480/663171063f11b-6p5l3-bp2jf-235c42bced63596fb57f29b60d9f2ebb.jpg", text: "inglês, foil" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480445/664f946710286-ux10d-2xezt-e4c33be81cc6c4dec5a513d10daafc38.jpg", text: "inglês, foil" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480445/664d0c8ae2650-rhn79-xrv1z-e4c33be81cc6c4dec5a513d10daafc38.jpg", text: "inglês, foil" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480476/6650e6dbe5322-ei5m7-pt9mj-741ea1afec7408809e499d968557ef51.jpg", text: "inglês" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480480/6631712266082-wixat-69hyd-235c42bced63596fb57f29b60d9f2ebb.jpg", text: "inglês" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480480/664e40e1060b5-gj9ql-wy6zs-235c42bced63596fb57f29b60d9f2ebb.jpg", text: "inglês" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480445/66563cb1ea26d-exlaq-rcqe4-e4c33be81cc6c4dec5a513d10daafc38.jpg", text: "português" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480355/65d50f98ea569-5zhrq-1ba0w-53fdd2e621e2cbb1aa9fb448aa57b3de.jpg", text: "inglês" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480241/6482269a043a7-rodlw-6xmz9-20822909696482269a043f0.jpg", text: "inglês, foil" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480304/64df510a068c9-0ex8d-nyp1i-67287720764df510a06908.jpg", text: "inglês" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480404/6579fd5b7121d-4psl6-xasm1-a627c3b71395031eb1342c5a289b3266.jpg", text: "inglês" },
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480445/66312e3355418-4zh19-xuhpt-e4c33be81cc6c4dec5a513d10daafc38.jpg", text: "português"},
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480477/66316b2778e33-owmsr-06i5r-d6cdcd265e32d247c42376c4bfd9f24f.jpg", text: "inglês"},
    { image: "https://repositorio.sbrauble.com/arquivos/in/magic/480445/664d0c6b1c8a5-akfoq-5r9wo-e4c33be81cc6c4dec5a513d10daafc38.jpg", text: "português, foil"},
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 magic-bg">
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 bg-white bg-opacity-20 rounded-lg py-2 ">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center items-center ">
            <Card image={card.image} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

    
    
    
    
    
    
    
    
    



