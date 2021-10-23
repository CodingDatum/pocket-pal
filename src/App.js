import React, { useState } from 'react';
// import styles from './App.module.css';
import NavBar from './components/NavBar';
import NavCol from './components/NavCol';

function App() {

  const [navColumnActive, setNavColumnActive] = useState(false);

  // should I use event here? as parameter?

  const hamburgerClickHandler = () =>{
    if(navColumnActive){
      setNavColumnActive(false)
    }else{
      setNavColumnActive(true)
    }
  }

  // Render the buttons for the FEW apps you intend to deploy
  return (
    <React.Fragment>
      <NavBar hamburgerClickHandler={hamburgerClickHandler} navColIsOpen={navColumnActive}/>
      {navColumnActive && <NavCol />}
    </React.Fragment>
  );
}

export default App;
