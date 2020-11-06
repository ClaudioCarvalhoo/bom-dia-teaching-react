import React from "react";

export default function Form(props) {
  return (
    <>
      <label for="fname">First name:</label>
      <input
        type="text"
        value={props.userInput.name}
        onChange={(e) => {
          props.setUserInput({ ...props.userInput, name: e.target.value });
        }}
      />
      <br />
      <br />
      <label for="lname">Last name:</label>
      <input
        type="text"
        value={props.userInput.lastName}
        onChange={(e) => {
          props.setUserInput({ ...props.userInput, lastName: e.target.value });
        }}
      />
      <br />
      <br />
    </>
  );
}
