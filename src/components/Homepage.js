import React from "react";
import logo from "../img/Agendario_Logo.png";
import screenshot from "../img/screenshot.png";

const Homepage = ({ setScreen }) => {
  const addActivity = () => {
    setScreen("addActivity");
  };

  return (
    <header className="Homepage">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="Title">Agendario</p>
      <div className="container">
        <div className="left">
          <img src={screenshot} className="screenshot" alt="Agendario App" />
        </div>
        <div className="right">
          <p>Empieza a escribir tus actividades diarias</p>
          <button onClick={addActivity}>Iniciar</button>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
