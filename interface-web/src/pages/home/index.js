import { React, useEffect, useState } from "react"
import "./style.css"
import Jogo from "../../components/cardJogo";
import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const Home = () => {

    const [times, setTimes] = useState([{}])

    const getJogos = async () => {
        // console.log("API: ", process.env.REACT_APP_API_URL)
        // console.log("TOKEN: ", process.env.TOKEN_BACK)


        api.get(`/times/lista?token=457e4686-30d7-4244-b32c-122a5195f197`)
            .then((response) => {
                setTimes(response.data)
            })
            .catch(function (error) {
                console.log("Error ao carregar dados cidade", error);
            });

        console.log(times.data != undefined)

    }


    return (
        <div className='Container'>
            <>
                <p className='Title-page'>Sorteio de Jogos</p>
                <div className='Button'>
                    <button type="button" class="btn btn-primary" className='Btt' onClick={() => getJogos()}>Sortear</button>
                </div>
                {
                    times.data != undefined ? (
                        <div className='Result'>
                            <Jogo titulo='Jogo 1' time1={times.data[0].nome} time2={times.data[1].nome} />
                            <Jogo titulo='Jogo 2' time1={times.data[2].nome} time2={times.data[3].nome} />
                            <Jogo titulo='Jogo 3' time1={times.data[4].nome} time2={times.data[5].nome} />
                            <Jogo titulo='Jogo 4' time1={times.data[6].nome} time2={times.data[7].nome} />
                        </div>
                    )
                        :
                        <span></span>

                }
            </>
        </div>
    );
}

export default Home