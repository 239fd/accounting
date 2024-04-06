import React  from 'react';
import cssProperties from "./Receiver.css";

function TakeReceiver() {
    return (
        <div className="Take" style={cssProperties}>
            <p className="head">
                Принять товар
            </p>
            <div className="UNP">
                <p>Введите УНП: </p>
                <input></input>
            </div>
            <div className="Name">
                <p>Введите наименование: </p>
                <input></input>
            </div>
            <div className="Amount">
                <p>Введите количество: </p>
                <input></input>
            </div>
            <div className="Price">
                <p>Введите стоимость: </p>
                <input></input>
            </div>
            <button className="button">
                Записать
            </button>
        </div>
    )
}

export default TakeReceiver;
