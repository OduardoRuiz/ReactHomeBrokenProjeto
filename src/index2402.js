import React, { useEffect } from "react";
import ReactDOM from 'react-dom';

const root = document.getElementById("root");

/** 
const acoes = [{
    nome: "PETR4",
    preco: 3.50,
    cresc: -18
}, {
    nome: "DKDKDKDK",
    preco: 3.50,
    cresc: -18
}, {
    nome: "OIBR4",
    preco: 3.50,
    cresc: -18
}, {
    nome: "CIEL4",
    preco: 0.50,
    cresc: -25
}]

function Acao(props) {


    return <div>{props.acao.nome} |  {props.acao.preco} | {props.acao.cresc} </div>
}
function Acoes(){
  
  //Retorna os elementos do array "Ações"
    return  acoes.map((acao,index) =>

        <Acao acao={acao} key={index}/>

    )
}
*/
function Descricao() {

    //Set states estão na parte dos Hookies
    let [developer, setDeveloper] = React.useState({
        nome: "duardo",
        lang: "PHP",
        anos: 0
    });

    useEffect(() => {
        console.log("Rodou Use Efect")
        document.title= developer.nome
    }, []);
    /** 
        const [lang, setLang] = React.useState('PHP')
        const [anos, setAnos] = React.useState(0)
    */
    /** 
    const linguagemState = React.useState('PHP')
    const lang = linguagemState[0];
    const setLang = linguagemState[1];
    */
    function handleClickLinguagem() {
        setDeveloper({
            ...developer,
            lang: "JavaScript",
            anos: 0
        })
        /** let el = document.getElementById("ling")
         el.innerText = "Eu sei javascript"*/
    }
    /**  function handleClickLinguagem2() {
         setDeveloper("NODEjs")
         let el = document.getElementById("ling")
          el.innerText = "Eu sei javascript"
     }
     */
    function handleChangeAnos(event) {
        setDeveloper({
            ...developer,
            anos: event.target.value
        })

        //    setAnos(event.target.value)
    }
    function handleChangeNome(event) {
        setDeveloper({
            ...developer,
            nome: event.target.value
        })

        
    }

    return (<>
        <p id="ling">Eu sei {developer.lang}</p>
        <input type="number" onChange={handleChangeAnos} />
        <p>Trabalho com essa linguagem a  {developer.anos} anos</p>
        <input type="text" onChange={handleChangeNome} placeholder="nome" />
        <button onClick={handleClickLinguagem}>Alterar linguagem</button>

    </>)
}

ReactDOM.render(<Descricao />,
    root);