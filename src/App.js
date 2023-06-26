import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdcionado(colaborador)}/>
      <Time nome="Grifinória"/>
      <Time nome="Sonserina"/>
      <Time nome="Lufa-Lufa"/>
      <Time nome="Corvinal"/>
    </div>
  );
}

export default App;
