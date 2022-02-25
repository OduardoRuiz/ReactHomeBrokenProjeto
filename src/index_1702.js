import React from "react";
import ReactDOM from 'react-dom';


const root = document.getElementById("root");

function Inicio(props) {

    function handleClickAno() {
        alert(props.ano);

    }

    const hello = (
        <>
            <h1 onClick={handleClickAno}> Hello World! in {props.ano}</h1>
            <p>{props.estaLogado ? 'Você esta logado' : 'Você não esta logado'} </p>
        </>);

    return hello

}
function Layout(props) {
    return <div id="layout">
        {props.children}
    </div>;
}


function Alunos() {
    const alunos = ['fndgndign', 'fsigsnginsgnisngi', 'ndigndigneing', 'nsiungfingiweng'];

    const elementoAlunos = alunos.map((aluno, index) => <li key={index}>{aluno}</li>);

    return (
        <ul>
            {elementoAlunos}
        </ul>
    )
}

function Broken() {
    const dolar = { nome: "dolar", valor: 10.00, variacao: 13.15 };
    const euro = ['nome : Euro', 'Valor hoje: R$15,25', 'Variação 13%'];
    const libraEsterlina = ['nome : Libra Esterlina', 'Valor hoje: R$ 22,20', 'Variação:  15%'];

    const elementoDolar = dolar.map((umdolar, index) => <li key={index}>{umdolar}</li>);

    const elementoEuro = euro.map((umeuro, index) => <li key={index}>{umeuro}</li>);

    const elementolibra = libraEsterlina.map((umaLibra, index) => <li key={index}>{umaLibra}</li>);


    return (
        <>

            <ul>{elementoDolar}</ul>
            <ul>{elementoEuro}</ul>
            <ul>{elementolibra}</ul>
        </>);

}

function Painel(props) {

    const PainelLayout = (<>

        <h1>Cotação {props.moeda}</h1>
        <p>Valor:  {props.valor}</p>
        <p>Variação:  {props.valor}</p>

    </>);



    return PainelLayout

}

function App() {

    return (<Layout>
        < Painel moeda="dolar" valor="15.00" variacao="25.20" />
        < Painel moeda="Euro" valor="15.00" variacao="25.20" />
        < Painel moeda="Libra" valor="15.00" variacao="25.20" />

    </Layout>);
}

ReactDOM.render(<App />, root);