import React  from 'react';
import cssProperties from "./Receiver.css"


function ShipReceiver() {
    return (
        <div className="Ship" style={cssProperties}>
            <p className="head">
                Отгрузить товар
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
            <div className="Organization">
                <p>Введите организацию: </p>
                <input></input>
            </div>
            <button className="button">
                Отгрузить
            </button>
        </div>
    )
}

export default ShipReceiver;
