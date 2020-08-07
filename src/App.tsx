import React, { useState } from "react";
import './App.sass';

export default function App() {
  const [name, setName] = useState<string>("I am a state");
  return (
    <div>
      <div>Hola Mundo! Alooooooooooooooooooo</div>
      <div>{name}</div>
    </div>
  );
}
