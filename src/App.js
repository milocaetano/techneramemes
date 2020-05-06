import React, { useState } from 'react';
import Tweet from './tweet';

function App() {

 
 const [isRed,  setRed] = useState(false);


  
  return (
    <div className="app">
      <Tweet name="Camilo Caetano"></Tweet>
      <Tweet name="Marina Caetano"></Tweet>
      <Tweet name="Thais Caetano"></Tweet>
      <Tweet name="Célia Regina Caetano"></Tweet>
      <Tweet name="Helio Aparecido"></Tweet>
      <Tweet name="Anna Maura Gandra"></Tweet>
    </div>
  );
}

export default App;