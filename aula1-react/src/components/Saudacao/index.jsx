import './style.css';

function Saudacao({nome, sobrenome}) {
    return <p className='titulo'>Olá, {nome} {sobrenome}! Seja bem vindo ao nosso site!</p>
}

export default Saudacao;