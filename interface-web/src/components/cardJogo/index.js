import React from "react";
import "./style.css"

const Jogo = (props) => {
    return (
        <div className="Card">
            <p className="Title">{props.titulo}</p>
            <div className="Infor">
                <p className="Team">{props.time1}</p>
                <p className="X">X</p>
                <p className="Team">{props.time2}</p>
            </div>
        </div>
    );
}

export default Jogo