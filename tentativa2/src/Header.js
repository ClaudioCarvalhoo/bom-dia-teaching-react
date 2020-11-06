import React from "react";

export default function Header(props) {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>{props.texto}</h1>
      <h3>{props.subTexto}</h3>
    </div>
  );
}
