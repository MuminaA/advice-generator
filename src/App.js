import React, { useState } from "react";
import "./App.css";
import divider from "./assets/images/pattern-divider-desktop.svg";
import button from "./assets/images/icon-dice.svg";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("Here's your advice");
  const [id, setId] = useState(null);

  function handleClick() {
    setAdvice("Loading...");

    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        /* update state */
        setAdvice(response.data.slip.advice);
        setId(response.data.slip.id);
      })
  }

  return (
    <div className="container">
      <div className="advice-num">Advice #{id}</div>
      <div>
        <h1 className="advice">"{advice}"</h1>
      </div>
      <div className="divider">
        <img src={divider} alt="" />
      </div>
      <button onClick={handleClick}>
        <img src={button} alt="" />
      </button>
    </div>
  );
}

export default App;
