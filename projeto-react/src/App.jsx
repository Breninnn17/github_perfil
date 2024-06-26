import { useState } from "react";

import Perfil from "./componetes/Perfil";

import Formulario from "./componetes/Formulario";
import ReposList from "./componetes/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario]= useState ('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}


    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel) } type="button"> Iniciar </button>*/} 
    </> 
  )

}
export default App
