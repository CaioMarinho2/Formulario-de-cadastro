import CachorroFeliz from "./images/happy-birthday-smiling-dog.jpg"
import "./index.css"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";





function Home() {

    const history = useHistory();
    const { name } = useParams();
  
    return(
        <div className="home">
         <h1>Bem-Vindo, {name}</h1>
         <img className="cachorroFeliz" alt="Cachorro Feliz" src={CachorroFeliz}></img>
         <button className="voltar" onClick={()=>{
             history.push('/')
         }} >Voltar</button>
        </div>
    )
}
export default Home