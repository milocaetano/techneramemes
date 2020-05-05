import React from 'react';

function App(){

    const sayHello = () => {
        console.log("hello");
    };

    return (
        <div>
              <h1>Hello Rect</h1>
              <button onClick="sayHello()">Say Hello</button>
        </div>

    );

}

export default App;