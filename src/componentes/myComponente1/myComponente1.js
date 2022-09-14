import "./myComponente1.css";
import imagen1 from './imagen1.png';

const MyComponente1 = ()=>{
    const nombre = "Alejandra"
    const curso = "React"
    return(
        <div>
            <h1> Bienvenida {nombre} al curso de {curso}</h1>
        
        <img src= {imagen1} className="componente"></img>
    
        </div>
    )
}
export default MyComponente1;