import { Card } from "../../components/card";
import "./style.css";

function Home() {
  return (
    // fragment //
    <div className="container"> 
      <h1>Lista de presença</h1>
      <input type="text" name="nome" id="nome__input" placeholder="Digite seu nome..."/>
      <button type="button">Adicionar</button>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Home
