import React, { useState } from 'react';
import Tweet from './tweet';

function App() {

 
 const [isRed,  setRed] = useState(false);


  
  return (
    <div className="app">
      <Tweet name="Camilo Caetano" conteudo="aqui vai um texto"></Tweet>
      <Tweet name="Marina Caetano" conteudo="aqui vai um texto"></Tweet>
      <Tweet name="Thais Caetano" conteudo="aqui vai um texto"></Tweet>
      <Tweet name="Célia Regina Caetano" conteudo="aqui vai um texto"></Tweet>
      <Tweet name="Helio Aparecido" conteudo="aqui vai um texto"></Tweet>
      <Tweet name="Anna Maura Gandra" conteudo="aqui vai um texto"> </Tweet>
    </div>
  );
}

export default App;