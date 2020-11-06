import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";

function clicou() {
  console.log("clocou");
}

export default function App() {
  const [userInput, setUserInput] = useState({});
  const sorvetes = ["Morango", "Chocolate", "Doce de Leite"];
  return (
    <>
      <Header texto="Cactinhos" subTexto={"Online"} />
      <Form userInput={userInput} setUserInput={setUserInput} />
      <input type="submit" value="Submit" onClick={clicou}></input>
      <h1>
        {userInput.name} {userInput.lastName}
      </h1>
      <ul>
        {sorvetes.map((sorvete, i) => (
          <li key={i}>{sorvete}</li>
        ))}
      </ul>
      {true && <p>eu apareço</p>}
      {false && <p>eu não apareço</p>}
    </>
  );
}
