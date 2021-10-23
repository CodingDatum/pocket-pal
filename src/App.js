import React, { useState } from 'react';
import NavBar from './components/Nav/NavBar';
import NavCol from './components/Nav/NavCol';
import HomePage from './components/HomePage.js';

function App() {

  const [navColumnActive, setNavColumnActive] = useState(false);

  const hamburgerClickHandler = () =>{
    if(navColumnActive){
      setNavColumnActive(false)
    }else{
      setNavColumnActive(true)
    }
  }

  return (
    <React.Fragment>
      {navColumnActive && <NavCol />}
      <NavBar hamburgerClickHandler={hamburgerClickHandler} navColIsOpen={navColumnActive}/>
      <HomePage activeApp={null} />
    </React.Fragment>
  );
}

export default App;
