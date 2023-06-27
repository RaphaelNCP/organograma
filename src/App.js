import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Grifinória',
      corPrimaria: '#FFC500',
      corSecundaria: '#7F0909'
    },
    {
      nome: 'Sonserina',
      corPrimaria: '#AAAAAA',
      corSecundaria: '#0D6217'
    },
    {
      nome: 'Lufa-Lufa',
      corPrimaria: '#000000',
      corSecundaria: '#EEE117'
    },
    {
      nome: 'Corvinal',
      corPrimaria: '#946B2D',
      corSecundaria: '#000A90'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdcionado(colaborador)}/>
      
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
