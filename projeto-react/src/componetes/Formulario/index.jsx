import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState (0);
    const [materiaB, setMateriaB] = useState (0); 
    const [materiaC, setMateriaC] = useState (0);   
    const [nome, setNome] = useState(''); 

    
    useEffect(() => {
        console.log("o componete iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    },[]);

    useEffect(() => {
        console.log("o estado mudou");
    },[nome]);
    
    useEffect(() => {
        console.log("A materia A mudou para:" + materiaA);
    },[materiaA, materiaB, materiaC]);

    const alteraNome = (evento) =>{
        setNome(estadoAnterior => {
            return evento.target.value;
        })

    }

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 6){
            return (
                <p>Olá {nome} Foi Aprovado</p>
            )
        } else {
            return (
                <p> Nao foi desta vez {nome} estude mais </p>
            )
        }
    }

    return ( 
    <form>
        <ul>
            {[1,2,3,4,5].map(item =>(
            <li key={item} >{item}</li>
            ))}
        </ul>

        <input type="text" placeholder="Seu nome"onChange={alteraNome} />
        <input type="number" placeholder="Nota Materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
        <input type="number" placeholder="Nota Materia A" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
        <input type="number" placeholder="Nota Materia A" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
        {renderizaResultado()}
    </form>
    
    )
}

export default Formulario