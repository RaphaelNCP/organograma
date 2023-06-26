import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Sonserina',
        'Lufa-Lufa',
        'Corvinal',
        'Grifinória'
    ]

    const [nome, setNome] = useState('')
    const [ocupacao, setOcupacao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            ocupacao,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do aluno de Hogwarts</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do bruxo"
                    valor = {nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Ocupação"
                    placeholder="Digite o cargo do bruxo"
                    valor = {ocupacao}
                    aoAlterado={valor => setOcupacao(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="imagem"
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Casa"
                    itens={times}
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario