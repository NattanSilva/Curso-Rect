import React, { useState } from "react";
import { Card } from "../../components/card";
import "./style.css";

function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    // fragment //
    <div className="container"> 
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        name="nome" 
        id="nome__input" 
        placeholder="Digite seu nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Nattan" time="12:56:24"/>
      <Card name="João" time="11:10:56"/>
      <Card name="Ana" time="13:24:33"/>
    </div>
  )
}

export default Home
