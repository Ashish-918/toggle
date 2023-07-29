import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const toggleBackground = () => {
    setIsBackgroundDark((prevIsBackgroundDark) => !prevIsBackgroundDark);
  };

  const appStyles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isBackgroundDark ? 'black' : 'white',
    color: isBackgroundDark ? 'white' : 'black',
  };

  return (
    <div style={appStyles}>
      <div>
        <h1>Toggle Background Color</h1>
        <button onClick={toggleBackground}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
