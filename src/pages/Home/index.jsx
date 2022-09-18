import React, { useState } from "react";
import { Card } from "../../components/card";
import "./style.css";

function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] =  useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    setStudents(prevState => [...prevState ,newStudent]);
  }

  return (
    // fragment //
    <div className="container"> 
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        name="nome" 
        id="nome__input" 
        placeholder="Digite seu nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
        </button>

      {
        students.map(student => <Card name={student.name} time={student.time}/>)
      }
    </div>
  )
}

export default Home
