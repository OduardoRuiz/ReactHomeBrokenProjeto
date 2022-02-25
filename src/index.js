import React, { useEffect } from "react";
import ReactDOM from 'react-dom';

const root = document.getElementById("root");

function Descricao() {

    //Set states estão na parte dos Hookies
    let [crypts, setCrypts] = React.useState(null);
    let [coin, setCoin] = React.useState("btc");
    let [position, setPosition] = React.useState(0);

    useEffect(() => {
        fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
            .then(res => res.json())
            .then(data =>  setCrypts(data)) 
    }, []);
    
    function handleChangeAnos(event) {
        setCoin(event.target.value);

        //    setAnos(event.target.value)
    }
    function handleClickBuscar() {
        const posicao = crypts.findIndex((moeda) => moeda.baseAsset==coin)
        setPosition(posicao);

        //    setAnos(event.target.value)
    }

    return (
        !crypts ?
            <h1>carregando...</h1>
            :
            <>
            <input type="text" onChange={handleChangeAnos} /> <button onClick={handleClickBuscar}>Pesquisar</button>

                <div class="container">
                    <div class="row bg-secondary m-5 ">
                        <div class="col">
                            Moeda :  <h1>{crypts[position].baseAsset}</h1>
                        </div>
                        <div class="col">
                            Ultimo preço :   <p>{crypts[position].lastPrice}</p>
                        </div>
                        <div class="col">
                            Preço Inicial :  <p>{crypts[position].openPrice}</p>
                        </div>
                        <div class="col">
                            Menor Preço  :  <p>{crypts[position].lowPrice}</p>
                        </div>
                        <div class="col">
                            Maior Preço :  <p>{crypts[position].highPrice}</p>
                        </div>
                    </div>
                </div>
            </>)
}

ReactDOM.render(<Descricao />,
    root);