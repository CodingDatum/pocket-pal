import React, { useState } from 'react';
import NavBar from './components/Nav/NavBar';
import NavCol from './components/Nav/NavCol';
import HomePage from './components/HomePage.js';

function App() {

  const [navColumnActive, setNavColumnActive] = useState(false);
  const [home, setHome] = useState(true);

  const hamburgerClickHandler = () =>{
    if(navColumnActive){
      setNavColumnActive(false)
    }else{
      setNavColumnActive(true)
    }
  }

  const goHome = () => {
    setHome(true)
  }

  const goAway = () => {
    setHome(false)
  }

  return (
    <React.Fragment>
      {navColumnActive && <NavCol goHome={goHome}/>}
      <NavBar hamburgerClickHandler={hamburgerClickHandler} navColIsOpen={navColumnActive}/>
      <HomePage home={home} goAway={goAway} />
    </React.Fragment>
  );
}

export default App;
