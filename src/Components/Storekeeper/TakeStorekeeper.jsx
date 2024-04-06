import React  from 'react';
import cssProperties from "./Storekeeper.css"




function TakeStorekeeper() {
    return (
        <div style={cssProperties}>
            <div className='main-table'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Номер заявки</th>
                        <th scope="col">Cтатус</th>
                        <th scope="col">Дата поступления</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Ожидает подтверждения</td>
                        <td>06.04.2024</td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ожидает подтверждения</td>
                        <td>06.04.2024</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ожидает подтверждения</td>
                        <td>06.04.2024</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='input'>
                <p>Введите номер заявки</p>
                <input></input>
            </div>
            <div className="buttons">
                <button className="button1">
                    Принять
                </button>
                <button className="button2">
                    Отменить
                </button>
            </div>
        </div>
    )
}

export default TakeStorekeeper;
